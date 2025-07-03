// import React from "react";
// import isOnlineHOC from "../hoc/isOnlineHOC";

// type ChildrenType = {
//   text: string;
//   style: Record<string, string>;
//   type?: "button" | "submit" | "reset";
// } & Partial<React.HTMLProps<HTMLButtonElement>>;

// const BaseButton: React.FC<ChildrenType> = ({
//   text,
//   style,
//   type = "button",
//   ...props
// }) => {
//   return (
//     <button {...props} style={style} type={type}>
//       {text}
//     </button>
//   );
// };

// const ButtonWithHOC = isOnlineHOC(BaseButton);

// export default ButtonWithHOC;

import React from "react";
import isOnlineHOC from "../hoc/isOnlineHOC";

type ChildrenType = {
  text: string;
  type?: "button" | "submit" | "reset";
  style: Record<string, string>;
} & Partial<React.HTMLProps<HTMLButtonElement>>;

const BaseButton: React.FC<ChildrenType> = ({
  text,
  style,
  type = "button",
  ...props
}) => {
  return (
    <button {...props} style={style} type={type}>
      {text}
    </button>
  );
};

const ButtonWithHOC = isOnlineHOC(BaseButton);

export default ButtonWithHOC;
