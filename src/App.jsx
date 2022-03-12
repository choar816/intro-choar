import React, { useState } from 'react';
import styled from 'styled-components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';

const mainContents = {
  0: <Resume />,
  1: <Portfolio />,
};

const TabNames = ['Resume', 'Portfolio'];

const TabContainer = styled.div`
  margin-top: 2.5rem;
  text-align: center;

  button {
    padding: 0.3rem 1rem;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #000;
    border-radius: 1rem;
  }
  button + button {
    margin-left: 2rem;
  }
`;

const MainContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 5%);
  border-radius: 1rem;
  background-color: #fff;
`;

function App() {
  const [content, setContent] = useState({ activeTab: 0 });
  function tabHandler(id) {
    setContent({ activeTab: id });
  }

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
        {TabNames.map((val, idx) => (
          <button type="button" onClick={() => tabHandler(idx)}>
            {val}
          </button>
        ))}
      </TabContainer>
      <MainContainer>{mainContents[content.activeTab]}</MainContainer>
      <footer>Ahra Cho ⓒ 2022 All rights reserved.</footer>
    </div>
  );
}

export default App;
