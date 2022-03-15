import React, { useState } from 'react';
import styled from 'styled-components';
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

const TabContainer = styled.div`
  margin-top: 2.5rem;
  text-align: center;

  button {
    padding: 0.3rem 1rem;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #000;
    border-radius: 1rem;
    transition: all .2s, background-color .5s;
    
    & + button {
      margin-left: 2rem;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .on {
    border: 1px solid #5C7AFF;
    outline: 2px solid #5C7AFF;
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

  return (
    <div className="container">
      <header>
        <p>
          Hi!
          <br />
          intro of choar
        </p>
      </header>
      <TabContainer>
        {tabContents.map((val, idx) => (
          <button
            type="button"
            onClick={() => setTabIdx(idx)}
            className={`${idx === tabIdx ? 'on' : ''}`}
          >
            {val.name}
          </button>
        ))}
      </TabContainer>
      <MainContainer>{tabContents[tabIdx].content}</MainContainer>
      <footer>Ahra Cho ⓒ 2022 All rights reserved.</footer>
    </div>
  );
}

export default App;
