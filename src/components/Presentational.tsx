// import React, { useState } from "react";
// import CounterDisplay from "./CounterDisplay";

// const CounterProvider: React.FC = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(c => c + 1);
//   const decrement = () => setCount(c => c - 1);

//   return (
//     <CounterDisplay count={count} onIncrement={increment} onDecrement={decrement} />
//   );
// };

// export default CounterProvider;

// import React from "react";

// interface CounterDisplayProps {
//   count: number;
//   onIncrement: () => void;
//   onDecrement: () => void;
// }

// const CounterDisplay: React.FC<CounterDisplayProps> = ({ count, onIncrement, onDecrement }) => {
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={onDecrement}>-</button>
//       <button onClick={onIncrement}>+</button>
//     </div>
//   );
// };

// export default CounterDisplay;
