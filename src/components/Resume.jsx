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
    description: ['Developed android application'],
  },
  {
    duration: '2019.06. - 2019.08.',
    position: 'Intern',
    company: 'Neuromeka',
    link: 'https://www.neuromeka.com/',
    department: ', R&D Department',
    description: [
      'Made research and solutions about how to improve UI/UX of the teaching pendant of collaborative robots',
      'Contributed to IndyEye website development',
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

const projectList = [
  {
    title: 'JS Quiz',
    summary: 'Website that people can solve javascript quiz',
    description: [
      'Duration : 20xx. xx. ~ xx. (x days)',
      'Skills : JavaScript',
      'Role : Developed timer related function',
    ],
    link: [
      { type: 'Website', to: 'https://jsquizzz.netlify.app/' },
      { type: 'GitHub', to: 'https://github.com/useon/js-quiz' },
    ],
  },
  {
    title: 'Blockchain UX Checklist',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    description: [
      'Duration : 20xx. xx. ~ xx. (x days)',
      'Skills : JavaScript',
      'Role : Developed timer related function',
    ],
    link: [
      { type: 'Website', to: 'https://jsquizzz.netlify.app/' },
      { type: 'GitHub', to: 'https://github.com/useon/js-quiz' },
    ],
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
    .text-dept {
      display: inline;
    }
    .part-first {
      flex: 1;
    }
    .part-second {
      flex: 2;
    }
  }

  .list-project {
    & > li + li {
      margin-top: 1rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    p {
      text-decoration: underline;
    }
    a + a {
      margin-left: .7rem;
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
                <a href={work.link}>{work.company}</a>
                <p className="text-dept">{work.department}</p>
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
        <h2>📌 PROJECTS</h2>
        <ul className="list-project">
          {projectList.map((proj) => (
            <li>
              <h3>{proj.title}</h3>
              <p>{proj.summary}</p>
              <ul className="list-with-dash">
                {proj.description.map((val) => (
                  <li>{val}</li>
                ))}
                <li>
                  {proj.link.map((val) => (
                    <a href={val.to}>{val.type}</a>
                  ))}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </Section>
      <Section>asdfasdf</Section>
    </>
  );
}

export default Resume;
