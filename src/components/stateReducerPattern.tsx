import  { useReducer } from "react";

type State = {
  on: boolean;
};

type Action = { type: "toggle" };

function defaultReducer(state: State, action: Action): State {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    default:
      return state;
  }
}

type ToggleProps = {
  reducer?: (state: State, action: Action) => State;
};

function Toggle({ reducer = defaultReducer }: ToggleProps) {
  const [state, dispatch] = useReducer(reducer, { on: false });

  function toggle() {
    dispatch({ type: "toggle" });
  }

  return <button onClick={toggle}>{state.on ? "ON" : "OFF"}</button>;
}

export default Toggle;


 export const customReducer = (state: { on: boolean }, action: { type: 'toggle' }): { on: boolean } => {
    switch (action.type) {
      case 'toggle':
        return { on: true }; // Only turns ON, never OFF
      default:
        return state;
    }
  };
  
  // In your App.tsx or another component

import Toggle from './Toggle'; // adjust path as needed

function App() {
  return (
    <>
      {/* Default behavior */}
      <Toggle />

      {/* Custom behavior: only turns ON */}
      <Toggle reducer={customReducer} />
    </>
  );
}

export default App;
