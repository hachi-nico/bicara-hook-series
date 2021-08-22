import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsFeeds from './components/NewsFeeds';
import LifecyclesSimulator from './components/LifecyclesSimulator';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bicara Hook Series Part 2 Side Effect</p>
        <button
          type="button"
          style={{ margin: '1em' }}
          onClick={() => {
            setToggle((prevState) => !prevState);
          }}
        >
          Toggle Lifecycle Simulator
        </button>
      </header>

      <section className="App-section">
        <NewsFeeds />
      </section>

      <footer className="App-footer">
        {toggle && <LifecyclesSimulator />}
      </footer>
    </>
  );
}

export default App;
