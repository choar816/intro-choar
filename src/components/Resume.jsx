import React from 'react';
import styled from 'styled-components';

const contactList = {
  GitHub: 'https://github.com/choar816',
  LinkedIn: 'https://www.linkedin.com/in/ahra-cho-209b6b187/',
  Mail: 'mailto:ahracho816@gmail.com',
};

const Section = styled.section`
  overflow: hidden;

  & + Section {
    margin-top: 1rem;
  }
  .list-contact {
    text-align: center;
    li {
      display: inline-block;
      & + li {
        margin-left: 1rem;
      }
    }
  }
  .list-experience > li {
    display: flex;
    gap: 1rem;
  }
  .list-experience > li + li {
    margin-top: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  article ul {
    list-style: '- ' inside;
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
        <ul className="list-experience">
          <li>
            <article className="part-first">
              <h3>2016.03-2021.08</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </article>
            <article className="part-second">
              <h3>blahblah company</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, ut?
                </li>
              </ul>
            </article>
          </li>
          <li>
            <article className="part-first">
              <h3>2016.03-2021.08</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </article>
            <article className="part-second">
              <h3>blahblah company</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, ut?
                </li>
              </ul>
            </article>
          </li>
        </ul>
      </Section>
      <Section>asdfasdf</Section>
      <Section>asdfasdf</Section>
    </>
  );
}

export default Resume;
