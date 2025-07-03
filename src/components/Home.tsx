// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button type="button" onClick={() => navigate("/login")}>
//         Login
//       </button>
//     </div>
//   );
// };

// export default Home;

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default Home;
