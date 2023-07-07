import React, { useState } from "react";

const CounterBlock = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter block</h1>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
      <h1> {count} </h1>
    </div>
  );
};

export default CounterBlock;