import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useSate("");

  useEffect(() => {
    console.log(`useEffect - Upadating document title`);
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count}times</button>
    </div>
  );
}

export default HookCounterOne;

//  import useeffect from react call it within the component and pass in a function which has to be excuted after every render of that component
// useEffect run after evry single render
