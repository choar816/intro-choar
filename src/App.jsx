import React, { useState } from 'react';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';

const mainContents = {
  0: <Resume />,
  1: <Portfolio />,
};

const TabNames = ['Resume', 'Portfolio'];

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
      <div className="contents">{mainContents[content.activeTab]}</div>
      <footer>footer footer footer</footer>
    </div>
  );
}

export default App;
