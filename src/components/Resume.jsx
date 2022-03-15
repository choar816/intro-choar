import React from 'react';
import styled from 'styled-components';

const contactList = {
  GitHub: 'https://github.com/choar816',
  LinkedIn: 'https://www.linkedin.com/in/ahra-cho-209b6b187/',
  Mail: 'mailto:ahracho816@gmail.com',
};

const workList = [
  {
    duration: '2020.08. - 2020.12.',
    position: 'Intern',
    company: 'Samsung Electronics',
    link: 'https://www.samsung.com/sec/',
    department: ', DS Division, DIT Center',
    description: ['Developed android application (Java, XML)', '** details **'],
  },
  {
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
];

const eduList = [
  {
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
    duration: '2016.03. - 2021.08.',
    type: 'Bachelor',
    school: 'Pohang University of Science and Technology (POSTECH)',
    link: 'https://postech.ac.kr/eng/',
    detail: '',
    description: [
      'Bachelor’s degree in Industrial and Management Engineering',
      'Overall GPA : 3.4/4.3',
      'Major GPA : 3.52/4.3',
    ],
  },
  {
    duration: '2019.09. - 2020.01.',
    type: 'Exchange student',
    school: 'Graz University of Technology',
    link: 'https://www.tugraz.at/home/',
    detail: '',
    description: ['Exchange student in fall semester in 2019'],
  },
];

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
  h2 {
    margin-bottom: 1.3rem;
    font-size: 1.5rem;
  }
  .text-after-link {
    display: inline;
  }
  .list-with-dash {
    list-style: '- ' inside;
  }

  .list-contact {
    margin-top: 1rem;
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
      display: flex;
      gap: 1rem;
      & + li {
        margin-top: 1rem;
      }
    }
    .part-first {
      flex: 1;
    }
    .part-second {
      flex: 2;
    }
  }
`;

function Resume() {
  return (
    <>
      <Section>
        <h2>📌 ABOUT ME</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          culpa odio beatae in minus nam necessitatibus dolores rerum, deserunt
          labore dignissimos nemo, distinctio quae temporibus deleniti fuga
          molestiae. Voluptatibus, laudantium.
        </p>
        <ul className="list-contact">
          {Object.keys(contactList).map((val) => (
            <li key={val}>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={contactList[val]}
              >
                {val}
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>📌 WORK EXPERIENCE</h2>
        <ul className="list-work">
          {workList.map((work) => (
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
          {eduList.map((edu) => (
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
      <Section>asdfasdf</Section>
    </>
  );
}

export default Resume;
