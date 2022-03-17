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

const MainContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 5%);
  border-radius: 1rem;
  background-color: #fff;

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
  // const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <header>
        <section>
          <article className="container-lang">
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'LANG_TO_EN' });
              }}
            >
              🇺🇸 ENG
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'LANG_TO_KO' });
              }}
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
            >
              LIGHT
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'DARK' });
              }}
            >
              DARK
            </button>
          </article>
        </section>
        <p>
          Hi!
          <br />
          intro of choar
        </p>
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

      <MainContainer>{tabContents(lang)[tabIdx].content}</MainContainer>

      <footer>Ahra Cho ⓒ 2022 All rights reserved.</footer>
    </div>
  );
}

export default App;
