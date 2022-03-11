import React, { useState } from 'react';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';

const mainContents = {
  0: <Resume />,
  1: <Portfolio />,
};

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
        <button type="button" onClick={() => tabHandler(0)}>Resume</button>
        <button type="button" onClick={() => tabHandler(1)}>Portfolio</button>
      </div>
      <div className="contents">
        {mainContents[content.activeTab]}
      </div>
      <footer>footer footer footer</footer>
    </div>
  );
}

export default App;
