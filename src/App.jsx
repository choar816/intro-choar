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
        <h1>Hi!</h1>
        <h2>Intro of choar</h2>
      </header>
      <div className="tabs">
        {TabNames.map((val, idx) => (
          <button type="button" onClick={() => tabHandler(idx)}>
            {val}
          </button>
        ))}
      </div>
      <MainContainer>{mainContents[content.activeTab]}</MainContainer>
      <footer>Ahra Cho ⓒ 2021 All rights reserved.</footer>
    </div>
  );
}

export default App;
