import { useEffect, useState } from "react";

type Props = {
  children: (props: { isEscapePressed: boolean }) => React.ReactNode;
};

const EscapeKeyListener: React.FC<Props> = ({ children }) => {
  const [isEscapePressed, setIsEscapePressed] = useState<boolean>(false);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsEscapePressed(true);
    }
  };
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsEscapePressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return children({ isEscapePressed });
};

export default EscapeKeyListener;
