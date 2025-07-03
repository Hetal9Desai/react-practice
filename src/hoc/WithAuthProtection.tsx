// import React from "react";
// import { Navigate } from "react-router-dom";

import { Navigate } from "react-router-dom";

// const WithAuthProtection = (InputComponent: React.FC) => {
//   const OutPutComponent: React.FC = (props) => {
//     const isLoggedIn = localStorage.getItem("user-id");
//     if (!isLoggedIn) {
//       return <Navigate to="/login" replace />;
//     }
//     return <InputComponent {...props} />;
//   };
//   return OutPutComponent;
// };

// export default WithAuthProtection;

const WithAuthProtection = (InputComponent: React.FC) => {
  const OutPutComponent: React.FC = (props) => {
    const isLoggedIn = localStorage.getItem("user-id");
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return <InputComponent {...props} />;
  };
  return OutPutComponent;
};

export default WithAuthProtection;
