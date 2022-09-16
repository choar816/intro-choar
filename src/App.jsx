import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';

const tabContents = [
  {
    name: 'Resume',
    content: <Resume />,
  },
  {
    name: 'Portfolio',
    content: <Portfolio />,
  },
];

const handleBackgroundColor = (type) => {
  switch (type) {
    case 'LIGHT':
      return `
        linear-gradient(
          90deg,
          #FC466B 0%,
          #3F5EFB 100%
        )
      `;
    case 'DARK':
      return `
        linear-gradient(
          90deg,
          #C33764 0%,
          #1D2671 100%
        )
      `;
    default:
      return `#E6E6E6`;
  }
};

function App() {
  const [tabIdx, setTabIdx] = useState(0);
  const lang = useSelector((state) => state.lang);
  const color = useSelector((state) => state.color);
  const dispatch = useDispatch();

  return (
    <>
      <Background isVisible={color === 'LIGHT'} type="LIGHT" />
      <Background isVisible={color === 'DARK'} type="DARK" />
      <HeaderContainer>
        <article className="container-lang">
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'LANG_TO_KO' });
            }}
            className={`${lang === 'KO' ? 'on' : ''}`}
          >
            🇰🇷 KOR
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'LANG_TO_EN' });
            }}
            className={`${lang === 'EN' ? 'on' : ''}`}
          >
            🇺🇸 ENG
          </button>
        </article>
        <article className="container-dark">
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'COLOR_TO_LIGHT' });
            }}
            className={`${color === 'LIGHT' ? 'on' : ''}`}
          >
            LIGHT
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'COLOR_TO_DARK' });
            }}
            className={`${color === 'DARK' ? 'on' : ''}`}
          >
            DARK
          </button>
        </article>
        <h1>{`Hi! I'm Ahra Cho.`}</h1>
      </HeaderContainer>
      <TabContainer>
        {tabContents.map((tabContent, idx) => (
          <button
            key={tabContent.name}
            type="button"
            onClick={() => setTabIdx(idx)}
            className={`${idx === tabIdx ? 'on' : ''}`}
          >
            {tabContent.name}
          </button>
        ))}
      </TabContainer>
      <MainContainer color={color}>{tabContents[tabIdx].content}</MainContainer>
      <footer>Ahra Cho ⓒ 2022 All rights reserved.</footer>
    </>
  );
}

export default App;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  background: ${({ type }) => handleBackgroundColor(type)};
`;

const TabContainer = styled.div`
  margin-top: 2.5rem;
  text-align: center;

  button {
    padding: 0.3rem 1rem;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #000;
    border-radius: 1rem;
    transition: all 0.2s, background-color 0.5s;

    & + button {
      margin-left: 2rem;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .on {
    border: 1px solid #5c7aff;
    outline: 2px solid #5c7aff;
  }
`;

const HeaderContainer = styled.header`
  position: relative;
  padding-top: 3rem;
  font-size: 1.5rem;
  text-align: center;

  h1 {
    margin-top: 2rem;
  }

  article {
    display: inline-block;
    & + article {
      margin-left: 1rem;
    }
  }

  button {
    width: 4rem;
    border: 1px solid #000;
    background-color: rgba(255, 255, 255, 0.5);
    line-height: 1rem;
    transition: background-color 0.5s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    & + button {
      border-left: none;
    }
  }

  .on {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MainContainer = styled.main`
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 5%);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.5s;
  ${({ color }) =>
    color === 'DARK' &&
    `
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    a {
      color: #738dff;
      &:hover {
        color: #a5b6ff;
      }
    }
  `}

  @media screen and (max-width: 576px) {
    margin: 2rem 1rem;
    padding: 1rem;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 2rem;
    padding: 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 4rem;
    padding: 2rem;
  }
  @media screen and (min-width: 992px) {
    margin: 4rem 6rem;
    padding: 3rem;
    font-size: 1.2rem;
  }
`;
