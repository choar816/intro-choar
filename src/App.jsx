import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';

const tabContents = (lang) => [
  {
    name: 'Resume',
    content: <Resume lang={lang} />,
  },
  {
    name: 'Portfolio',
    content: <Portfolio lang={lang} />,
  },
];

const Container = styled.div`
  background: rgb(169,255,229);
  background: linear-gradient(90deg, rgba(169,255,229,1) 0%, rgba(168,184,255,1) 100%);
  transition: background 0.5s;
  ${({ dark }) => dark && `
    background: rgb(28,159,119);
    background: linear-gradient(90deg, rgba(28,159,119,1) 0%, rgba(23,44,139,1) 100%);
  `}
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

const SettingContainer = styled.div`
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
    & + button {
      border-left: none;
    }
  }

  .on {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MainContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 5%);
  border-radius: 1rem;
  background-color: #fff;
  transition: all 0.5s;
  ${({ dark }) => dark && `
    background-color: #000;
    color: #fff;
    a {
      color: #738dff;
      &:hover {
        color: #a5b6ff;
      }
    }
  `}

  @media screen and (min-width: 750px) {
    margin: 4rem;
  }
  @media screen and (min-width: 1000px) {
    margin: 4rem 6rem;
  }
`;

function App() {
  const [tabIdx, setTabIdx] = useState(0);
  const lang = useSelector((state) => state.lang);
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  return (
    <Container>
      <header>
        <SettingContainer>
          <article className="container-lang">
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'LANG_TO_EN' });
              }}
              className={`${lang === 'EN' ? 'on' : ''}`}
            >
              🇺🇸 ENG
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'LANG_TO_KO' });
              }}
              className={`${lang === 'KO' ? 'on' : ''}`}
            >
              🇰🇷 KOR
            </button>
          </article>
          <article className="container-dark">
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'LIGHT' });
              }}
              className={`${!dark ? 'on' : ''}`}
            >
              LIGHT
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'DARK' });
              }}
              className={`${dark ? 'on' : ''}`}
            >
              DARK
            </button>
          </article>
        </SettingContainer>
        <p>Introduction of Ahra Cho</p>
      </header>
      <TabContainer>
        {tabContents(lang).map((val, idx) => (
          <button
            type="button"
            onClick={() => setTabIdx(idx)}
            className={`${idx === tabIdx ? 'on' : ''}`}
          >
            {val.name}
          </button>
        ))}
      </TabContainer>
      <MainContainer dark={dark}>
        {tabContents(lang)[tabIdx].content}
      </MainContainer>
      <footer>Ahra Cho ⓒ 2022 All rights reserved.</footer>
    </Container>
  );
}

export default App;
