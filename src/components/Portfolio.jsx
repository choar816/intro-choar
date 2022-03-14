import React from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      {projectList.map((proj) => (
        <li>
          <h2>{proj.title}</h2>
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
    </Container>
  );
}

export default Portfolio;
