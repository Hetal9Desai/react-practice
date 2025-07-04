import React, { useState } from "react";

function HookCounterTwo() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //    setCount(count + 1);// stale closure
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCountount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCountount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
