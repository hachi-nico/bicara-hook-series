import React, { useState } from 'react';

function useCounter() {
  const [state, setState] = useState(0);

  const handleCounter = () => {
    setState((currentState) => currentState + 1);
  };

  const handleTripleCounter = () => {
    setState((currentState) => currentState + 3);
  };

  return [state, handleCounter, handleTripleCounter];
}

export default useCounter;
