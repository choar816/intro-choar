import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  aboutme,
  contactList,
  skillList,
  workList,
  eduList,
  awardList,
} from '../data/ResumeData';
import ListWithDate from './ListWithDate';

function Resume() {
  const lang = useSelector((state) => state.lang);
  return (
    <>
      <Section>
        <h2>📌 ABOUT ME</h2>
        <ul className="list-contact">
          {Object.entries(contactList).map(([contactType, contactLink]) => (
            <li key={contactType}>
              <a target="_blank" rel="noreferrer noopener" href={contactLink}>
                {contactType}
              </a>
            </li>
          ))}
        </ul>
        <p>{aboutme[lang]}</p>
      </Section>
      <Section>
        <h2>📌 SKILL SET</h2>
        <ul className="list-with-dash">
          {Object.entries(skillList[lang]).map(([skillType, skillSet]) => (
            <li key={skillType}>{`${skillType} : ${skillSet}`}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>📌 WORK EXPERIENCE</h2>
        <ListWithDate list={workList} />
      </Section>
      <Section>
        <h2>📌 EDUCATION</h2>
        <ListWithDate list={eduList} />
      </Section>
      <Section>
        <h2>📌 AWARDS</h2>
        <ul className="list-award">
          {awardList
            .filter((award) => award.lang === lang)
            .map((award) => (
              <li key={award.title}>
                <h3>{award.title}</h3>
                <ul className="list-with-dash">
                  {award.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                  <li>
                    {award.link.map((linkData) => (
                      <a
                        key={linkData.type}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={linkData.to}
                      >
                        {linkData.type}
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
