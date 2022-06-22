import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function ListWithDate({ list }) {
  const lang = useSelector((state) => state.lang);

  return (
    <Container>
      {list
        .filter((item) => item.lang === lang)
        .map((item) => (
          <li>
            <article className="part-first">
              <h3>{item.duration}</h3>
              <p>{item.type}</p>
            </article>
            <article className="part-second">
              <a target="_blank" rel="noreferrer noopener" href={item.link}>
                {item.title}
              </a>
              <p className="text-after-link">{item.department}</p>
              <ul className="list-with-dash">
                {item.description.map((val) => (
                  <li>{val}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
    </Container>
  );
}

export default ListWithDate;

const Container = styled.ul`
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
`;
