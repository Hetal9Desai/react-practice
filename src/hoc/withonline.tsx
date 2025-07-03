// import React, { useEffect, useState } from "react";
// import type { ButtonProps } from "../components/Button";

// const withOnline = (
//   WrappedComponent: React.ComponentType<ButtonProps>
// ): React.FC => {
//   return (props) => {
//     const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

//     useEffect(() => {
//       const handleOnline = () => setIsOnline(true);
//       const handleOffline = () => setIsOnline(false);

//       window.addEventListener("online", handleOnline);
//       window.addEventListener("offline", handleOffline);

//       return () => {
//         window.removeEventListener("online", handleOnline);
//         window.removeEventListener("offline", handleOffline);
//       };
//     }, []);

//     // const handleClick = () => {
//     //   alert(`User is ${isOnline ? "online" : "offline"}`);
//     // };

//     return (
//       <WrappedComponent
//         {...props}
//         // onClick={handleClick}
//         label={isOnline ? "Go Online" : "Go Offline"}
//       />
//     );
//   };
// };

// export default withOnline;

import React, { useEffect, useState } from "react";
import type { ButtonProps } from "../components/Button";

const withOnline = (
  WrappedComponent: React.ComponentType<ButtonProps>
): React.FC<Omit<ButtonProps, "label">> => {
  return (props) => {
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }, []);

    return (
      <WrappedComponent
        {...props}
        label={isOnline ? "Go Online" : "Go Offline"}
      />
    );
  };
};

export default withOnline;
