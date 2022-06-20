import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const aboutme = {
  EN: `I started learning software development with interest in mobile application development.
  Now I'm trying to progress as an agile and systematic web front-end developer.
  
  I think the importance of a strong basis cannot be stressed enough.
  - I study based on official docs.
  - I am aware of how JavaScript works.
  - I am familiar with JavaScript ES6+.
  
  I love contributing to communities.
  - I upload posts on blog about dev knowledge. (e.g. JavaScript concepts, error handlings)
  - I translate official docs. (e.g. MDN Web Docs, React Docs, Next.js documentation)
  - I like participating in networking events to read tech trends and share a diverse view on technology.`,
  KO: `모바일 앱 개발에 흥미를 느껴 개발을 시작했으며,
  현재 민첩하고 체계적인 웹 프론트엔드 개발자로 나아가려 하는 조아라입니다.

  탄탄한 기초를 가장 중요하게 생각합니다.
  - 공식 문서를 바탕으로 공부합니다.
  - JavaScript 동작 원리에 대해 이해하고 있습니다.
  - JavaScript ES6+에 익숙합니다.
  
  커뮤니티에 기여하는 것을 좋아합니다.
  - 블로그에 문제 해결 과정 및 개발 지식을 공유합니다.
  - MDN Web Docs, React Docs, Next.js documentation 등의 공식 문서 번역에 기여합니다.
  - 컨퍼런스 등 네트워킹 행사에 참여하여 기술 트렌드를 파악하고, 기술에 대해 다양한 시각을 나눕니다.`,
};

const contactList = {
  GitHub: 'https://github.com/choar816',
  LinkedIn: 'https://www.linkedin.com/in/ahra-cho-209b6b187/',
  Mail: 'mailto:ahracho816@gmail.com',
  Blog: 'https://choar816.tistory.com/',
};

const skillList = {
  EN: {
    'Front-end': 'HTML, CSS, Sass/Scss, JavaScript, React',
    Algorithm: 'C/C++, JavaScript',
  },
  KO: {
    프론트엔드: 'HTML, CSS, Sass/Scss, JavaScript, React',
    알고리즘: 'C/C++, JavaScript',
  },
};

const workList = [
  {
    lang: 'EN',
    duration: '2021.07. - 2021.10.',
    position: 'Part-time',
    company: 'Nora Coding Academy',
    link: 'https://www.codingcampus.info/',
    department: '',
    description: ['Taught basic concepts and algorithm of C++ and Python'],
  },
  {
    lang: 'KO',
    duration: '2021.07. - 2021.10.',
    position: '아르바이트',
    company: '노라코딩전문학원',
    link: 'https://www.codingcampus.info/',
    department: '',
    description: ['C++, Python 기초 개념 및 알고리즘 강의'],
  },
  {
    lang: 'EN',
    duration: '2020.08. - 2020.12.',
    position: 'Intern',
    company: 'Samsung Electronics',
    link: 'https://www.samsung.com/sec/',
    department: ', DS Division, DIT Center',
    description: ['Developed android application (Java, XML)'],
  },
  {
    lang: 'KO',
    duration: '2020.08. - 2020.12.',
    position: '인턴',
    company: '삼성전자',
    link: 'https://www.samsung.com/sec/',
    department: ', DS부문, DIT센터',
    description: ['안드로이드 어플리케이션 개발 (Java, XML)'],
  },
  {
    lang: 'EN',
    duration: '2019.06. - 2019.08.',
    position: 'Intern',
    company: 'Neuromeka',
    link: 'https://www.neuromeka.com/',
    department: ', R&D Department',
    description: [
      'Researched and made solutions on UI/UX of collaborative robots',
    ],
  },
  {
    lang: 'KO',
    duration: '2019.06. - 2019.08.',
    position: '인턴',
    company: '뉴로메카',
    link: 'https://www.neuromeka.com/',
    department: ', 연구관리부서',
    description: ['협동로봇 UI/UX 리서치 및 솔루션 제안'],
  },
  {
    lang: 'EN',
    duration: '2017.07. - 2017.07.',
    position: 'Intern',
    company: 'Dayli Intelligence',
    link: 'https://dayliai.com/',
    department: ', Blockchain Department',
    description: [
      'Researched on cryptocurrencies',
      'Translated whitepapers (KOR↔ENG)',
    ],
  },
  {
    lang: 'KO',
    duration: '2017.07. - 2017.07.',
    position: '인턴',
    company: '데일리인텔리전스',
    link: 'https://dayliai.com/',
    department: ', 블록체인본부',
    description: ['가상화폐 리서치', '화이트페이퍼 번역 (한↔영)'],
  },
];

const eduList = [
  {
    lang: 'EN',
    duration: '2022.01. - 2022.02.',
    type: 'Bootcamp',
    school: '42 Seoul',
    link: 'https://42seoul.kr/seoul42/main/view',
    detail: ', La Piscine',
    description: [
      'Developed the ability to make use of Shell, C and algorithms',
    ],
  },
  {
    lang: 'KO',
    duration: '2022.01. - 2022.02.',
    type: '부트캠프',
    school: '42서울',
    link: 'https://42seoul.kr/seoul42/main/view',
    detail: ', 라피신',
    description: ['Linux, C 활용 능력 배양'],
  },
  {
    lang: 'EN',
    duration: '2021.10. - 2022.01.',
    type: 'Bootcamp',
    school: 'Likelion Front-end School',
    link: 'https://k-digital.likelion.net/',
    detail: ', 1st graduate',
    description: [
      'Completed web full-stack education course',
      'Front-end : HTML, CSS, SASS/SCSS, JavaScript, jQuery, Ajax, React',
      'Back-end : Node, Express, MongoDB, MySQL',
    ],
  },
  {
    lang: 'KO',
    duration: '2021.10. - 2022.01.',
    type: '부트캠프',
    school: '멋쟁이사자처럼 프론트엔드 스쿨',
    link: 'https://k-digital.likelion.net/',
    detail: ', 1기',
    description: [
      '웹 풀스택 개발 교육 과정 수료',
      '프론트엔드 : HTML, CSS, SASS/SCSS, JavaScript, jQuery, Ajax, React',
      '백엔드 : Node, Express, MongoDB, MySQL',
    ],
  },
  {
    lang: 'EN',
    duration: '2019.09. - 2020.01.',
    type: 'Exchange student',
    school: 'Graz University of Technology',
    link: 'https://www.tugraz.at/home/',
    detail: '',
    description: ['Exchange student in fall semester in 2019'],
  },
  {
    lang: 'KO',
    duration: '2019.09. - 2020.01.',
    type: '교환학생',
    school: '그라츠 공과 대학교',
    link: 'https://www.tugraz.at/home/',
    detail: ' (오스트리아)',
    description: ['2019-가을학기 교환학생'],
  },
  {
    lang: 'EN',
    duration: '2016.03. - 2021.08.',
    type: 'Bachelor',
    school: 'Pohang University of Science and Technology (POSTECH)',
    link: 'https://postech.ac.kr/eng/',
    detail: '',
    description: ["Bachelor's degree in Industrial and Management Engineering"],
  },
  {
    lang: 'KO',
    duration: '2016.03. - 2021.08.',
    type: '학사',
    school: '포항공과대학교',
    link: 'https://postech.ac.kr/eng/',
    detail: '',
    description: ['산업경영공학과 졸업'],
  },
];

const awardList = [
  {
    lang: 'EN',
    title: 'APRU, Global Health Student Poster Contest (2019.11.)',
    description: [
      '3rd place in the undergraduate category',
      "Researched on 'treatment system for severe dementia patients using multi-sensory stimulation'",
    ],
    link: [
      {
        type: 'Poster',
        to: 'https://drive.google.com/file/d/1KCzH7gUaj4nD6VVPdF0Dbqe00yZ9fq2Z/view?usp=sharing',
      },
      {
        type: 'Certificate',
        to: 'https://drive.google.com/file/d/1CuppctZHXdsTwZJPz462Tnb-uNt-RgEq/view?usp=sharing',
      },
      {
        type: 'Article',
        to: 'https://cite.postech.ac.kr/postech-students-won-3rd-place-in-the-apru-global-health-student-poster-contest-ug-category/',
      },
    ],
  },
  {
    lang: 'KO',
    title:
      '환태평양 대학 협회, Global Health Student Poster Contest (2019.11.)',
    description: [
      '학부생 부문 3위 수상',
      "'중증 치매 환자를 위한 다중 감각 자극 치료 시스템'을 주제로 연구 및 포스터 제작",
    ],
    link: [
      {
        type: '포스터',
        to: 'https://drive.google.com/file/d/1KCzH7gUaj4nD6VVPdF0Dbqe00yZ9fq2Z/view?usp=sharing',
      },
      {
        type: '상장',
        to: 'https://drive.google.com/file/d/1CuppctZHXdsTwZJPz462Tnb-uNt-RgEq/view?usp=sharing',
      },
      {
        type: '기사',
        to: 'https://cite.postech.ac.kr/postech-students-won-3rd-place-in-the-apru-global-health-student-poster-contest-ug-category/',
      },
    ],
  },
];

function Resume() {
  const lang = useSelector((state) => state.lang);
  return (
    <>
      <Section>
        <h2>📌 ABOUT ME</h2>
        <ul className="list-contact">
          {Object.entries(contactList).map(([key, val]) => (
            <li key={key}>
              <a target="_blank" rel="noreferrer noopener" href={val}>
                {key}
              </a>
            </li>
          ))}
        </ul>
        <p>{aboutme[lang]}</p>
      </Section>
      <Section>
        <h2>📌 SKILL SET</h2>
        <ul className="list-with-dash">
          {Object.entries(skillList[lang]).map((val) => (
            <li>{`${val[0]} : ${val[1]}`}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>📌 WORK EXPERIENCE</h2>
        <ul className="list-work">
          {workList
            .filter((work) => work.lang === lang)
            .map((work) => (
              <li>
                <article className="part-first">
                  <h3>{work.duration}</h3>
                  <p>{work.position}</p>
                </article>
                <article className="part-second">
                  <a target="_blank" rel="noreferrer noopener" href={work.link}>
                    {work.company}
                  </a>
                  <p className="text-after-link">{work.department}</p>
                  <ul className="list-with-dash">
                    {work.description.map((val) => (
                      <li>{val}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
        </ul>
      </Section>
      <Section>
        <h2>📌 EDUCATION</h2>
        <ul className="list-work">
          {eduList
            .filter((edu) => edu.lang === lang)
            .map((edu) => (
              <li>
                <article className="part-first">
                  <h3>{edu.duration}</h3>
                  <p>{edu.type}</p>
                </article>
                <article className="part-second">
                  <a target="_blank" rel="noreferrer noopener" href={edu.link}>
                    {edu.school}
                  </a>
                  <p className="text-after-link">{edu.detail}</p>
                  <ul className="list-with-dash">
                    {edu.description.map((val) => (
                      <li>{val}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
        </ul>
      </Section>
      <Section>
        <h2>📌 AWARDS</h2>
        <ul className="list-award">
          {awardList
            .filter((award) => award.lang === lang)
            .map((award) => (
              <li>
                <h3>{award.title}</h3>
                <ul className="list-with-dash">
                  {award.description.map((val) => (
                    <li>{val}</li>
                  ))}
                  <li>
                    {award.link.map((val) => (
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href={val.to}
                      >
                        {val.type}
                      </a>
                    ))}
                  </li>
                </ul>
              </li>
            ))}
        </ul>
      </Section>
    </>
  );
}

export default Resume;

const Section = styled.section`
  overflow: hidden;

  & + Section {
    margin-top: 2.5rem;
  }

  a {
    color: #0024c6;
    transition: all 0.5s;
    &:hover {
      color: #738dff;
      text-decoration: underline;
    }
  }
  p {
    white-space: pre-line;
  }
  .text-after-link {
    display: inline;
  }
  .list-with-dash {
    list-style: '· ' inside;
  }

  .list-contact {
    margin-bottom: 1rem;
    text-align: center;
    li {
      display: inline-block;
      & + li {
        margin-left: 1rem;
      }
    }
  }

  .list-work {
    & > li {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
      & + li {
        margin-top: 1rem;
      }
    }

    @media screen and (max-width: 768px) {
      & > li {
        grid-template-columns: 1fr;
        & + li::before {
          content: '';
          width: 100%;
          height: 1px;
          background-color: #e6e6e6;
        }
      }
    }
  }

  .list-award {
    h3 {
      font-size: 1.15rem;
    }
    ul {
      margin-top: 0.5rem;
    }
    a + a {
      margin-left: 0.7rem;
    }
  }
`;
