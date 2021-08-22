import React, { useState, useEffect } from 'react';

function LifecyclesSimulator() {
  console.log('-> component init');

  const [count, setCout] = useState(0);

  const handleCount = () => {
    setCout((prevState) => {
      return prevState + 1;
    });
  };

  useEffect(() => {
    console.log('-> component did mount');
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log('-> component did update', count);
    }
  }, [count]);

  useEffect(() => {
    // clean up function
    return () => {
      console.log('-> componet will unmount');
    };
  }, []);

  console.log('-> start render / re-render', count);

  return (
    <>
      <p>React Component Lifecycles Simulator</p>
      <button type="button" onClick={handleCount}>
        Count {count}
      </button>
    </>
  );
}

export default LifecyclesSimulator;
