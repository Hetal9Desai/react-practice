// import React, { useEffect, useState } from "react";

// function isOnlineHOC<T extends object>(InputComponent: React.ComponentType<T>) {
//   const ResultantComponent: React.FC<T> = (props) => {
//     const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

//     const handleOnline = () => {
//       setIsOnline(true);
//     };

//     const handleOffline = () => {
//       setIsOnline(false);
//     };

//     useEffect(() => {
//       window.addEventListener("online", handleOnline);
//       window.addEventListener("offline", handleOffline);

//       return () => {
//         window.removeEventListener("online", handleOnline);
//         window.removeEventListener("offline", handleOffline);
//       };
//     }, []);

//     if (!isOnline) return <p>User is offline</p>;

//     return <InputComponent {...props} />;
//   };

//   return ResultantComponent;
// }

// export default isOnlineHOC;

// function isOnlineHOC<T extends object>(InputComponent: React.ComponentType<T>) {
//   const ResultantComponent: React.FC<T> = (props) => {
//     const [isOnline, setIsOnline] = useState(navigator.onLine);

//     const handleOnline = () => {
//       setIsOnline(true);
//     };
//     const handleOffline = () => {
//       setIsOnline(false);
//     };

//     useEffect(() => {
//       window.addEventListener("online", handleOnline);
//       window.addEventListener("offline", handleOffline);

//       return () => {
//         window.addEventListener("online", handleOnline);
//         window.addEventListener("offline", handleOffline);
//       };
//     }, []);

//     if (!isOnline) {
//       return <p>User is OffLine</p>;
//     }
//     return <InputComponent {...props} />;
//   };
//   return ResultantComponent;
// }

// export default isOnlineHOC;
// hoc/isOnlineHOC.tsx (rename to IsOnline.tsx maybe)
import { useEffect, useState } from "react";

type IsOnlineProps = {
  children: (isOnline: boolean) => React.ReactNode;
};

const IsOnline: React.FC<IsOnlineProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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

  return <>{children(isOnline)}</>;
};

export default IsOnline;
