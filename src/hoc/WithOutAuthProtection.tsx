// import { Navigate } from "react-router-dom";

// const WithoutAuthProtection = (InputComponent: React.FC) => {
//   const OutputComponent: React.FC = (props) => {
//     const isLoggedIn = localStorage.getItem("user-id");

//     if (!isLoggedIn) {
//       return <InputComponent {...props} />;
//     }

//     return <Navigate to="/dashboard" replace />;
//   };

//   return OutputComponent;
// };

// export default WithoutAuthProtection;

import React from "react";
import { Navigate } from "react-router-dom";

const WithOutAuthProtection = (InputComponent: React.FC) => {
  const OutPutComponent: React.FC = (props) => {
    const isLoggedin = localStorage.getItem("user-id");

    if (!isLoggedin) {
      return <InputComponent {...props} />;
    }
    return <Navigate to="/dashboard" replace />;
  };
  return OutPutComponent;
};

export default WithOutAuthProtection;
