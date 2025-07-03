// import React, { useState } from "react";

// interface MouseTrackerProps {
//   children: (position: { x: number; y: number }) => React.ReactNode;
// }

// const MouseTracker: React.FC<MouseTrackerProps> = ({ children }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <div
//       style={{ height: "200px", border: "1px solid black" }}
//       onMouseMove={handleMouseMove}
//     >
//       {children(position)}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <MouseTracker>
//       {({ x, y }) => (
//         <p>
//           Mouse position — X: {x}, Y: {y}
//         </p>
//       )}
//     </MouseTracker>
//   );
// };

// export default App;

import React, { useState } from "react";

interface ToggleProps {
  children: (on: boolean, toggle: () => void) => React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ children }) => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prev) => !prev);

  return <>{children(on, toggle)}</>;
};

// Usage example
const App: React.FC = () => {
  return (
    <Toggle>
      {(on, toggle) => (
        <div>
          <button onClick={toggle}>{on ? "ON" : "OFF"}</button>
          <p>The toggle is {on ? "ON" : "OFF"}</p>
        </div>
      )}
    </Toggle>
  );
};

export default App;
