// import { useNavigate } from "react-router-dom";
// import WithoutAuthProtection from "../hoc/WithOutAuthProtection";

// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <p>Login</p>
//       <button
//         type="button"
//         onClick={() => {
//           localStorage.setItem("user-id", "helloLoggedIn");
//           navigate("/dashboard", { replace: true });
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// const UnProtectedLogin = WithoutAuthProtection(Login);

// export default UnProtectedLogin;

import { useNavigate } from "react-router-dom";
import WithOutAuthProtection from "../hoc/WithOutAuthProtection";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user-id", "helloLoggedIn");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export const UnProtectedLogin = WithOutAuthProtection(Login);
export default Login;
