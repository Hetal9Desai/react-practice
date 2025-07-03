import { useState } from "react";

const LivePreview: React.FC = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type Something..."
      />
      <p>Preview: {text}</p>
    </div>
  );
};

export default LivePreview;
