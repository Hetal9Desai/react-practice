import { useState } from "react";

const ToggleText: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <p>This Text can be toggled</p>}
    </div>
  );
};

export default ToggleText;
