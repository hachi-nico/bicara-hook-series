import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useCounter from './hooks/useCounter';

function App() {
  const [subscribe, setSubscribe] = useState(false);

  const handleSubscribe = () => {
    setSubscribe((currentState) => !currentState);
  };

  const [like, handleLike, handleTripleLike] = useCounter(0);
  const [dislike, handleDislike] = useCounter(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        {subscribe ? (
          <button
            type="button"
            className="subscribe-button"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={handleSubscribe}>
            Subscribe
          </button>
        )}

        <button type="button" onClick={handleDislike}>
          Dislike {dislike}
        </button>

        <button type="button" onClick={handleLike}>
          Like {like}
        </button>

        <button type="button" onClick={handleTripleLike}>
          Triple Like !!!
        </button>
      </header>
    </div>
  );
}

export default App;
