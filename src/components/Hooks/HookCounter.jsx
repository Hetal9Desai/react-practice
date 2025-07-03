import React, { useSate } from "react";

const [count, setCount] = useState(0);

function HookCounter() {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
    </div>
  );
}

export default HookCounter;

// usesate hook is a function so we simpli call them can call it which will take initial value of state property as argument returns current value of property and a method that is capable of updating that state property
// only call hooks at the top level
// don't call hooks inside loops, conditions, or nested functions
// only call hooks from React Functions
// call them from within React functional components and not just any regular javascript function
