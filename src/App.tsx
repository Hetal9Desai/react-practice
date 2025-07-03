// import React, { useEffect, useState } from "react";
// import withLoading from "./hoc/withLoading";
// import UserList from "./components/UserList";

// interface User {
//   id: number;
//   name: string;
// }

// const UserListWithLoading = withLoading(UserList);

// const App: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setUsers([
//         { id: 1, name: "Alice" },
//         { id: 2, name: "Bob" },
//         { id: 3, name: "Charlie" },
//       ]);
//       setLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <div style={{ textAlign: "center" }}>
//         <h1>User List</h1>
//         <UserListWithLoading users={users} loading={loading} />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Button from "./components/Button";
// import withOnline from "./hoc/withonline";

// const OnlineAwareButton = withOnline(Button);

// const App: React.FC = () => {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Online Status Button</h1>
//       <OnlineAwareButton />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Dashboard from "./components/Dashboard";
// import withAuthentication from "./hoc/withAuthentication";

// const ProtectedDashboard = withAuthentication(Dashboard);

// const App: React.FC = () => {
//   return (
//     <>
//       <ProtectedDashboard isAuthenticated={true} username="Alice" />

//       <ProtectedDashboard isAuthenticated={false} username="Alice" />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import ButtonWithHOC from "./components/ButtonWithHOC";

// const App: React.FC = () => {
//   return (
//     <div>
//       <ButtonWithHOC text="Click Me" style={{ padding: "10px" }} />
//     </div>
//   );
// };

// export default App;

// import Tabs from "./components/Tabs";

// function App() {
//   return (
//     <Tabs>
//       <Tabs.List>
//         <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
//         <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
//       </Tabs.List>

//       <Tabs.Content index={0}>Content for Tab 1</Tabs.Content>
//       <Tabs.Content index={1}>Content for Tab 2</Tabs.Content>
//     </Tabs>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import ProtectedDashBoard from "./components/DashBoard';
// import UnProtectedLogin from "./components/Login";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<ProtectedDashBoard />} />
//           <Route path="/login" element={<UnProtectedLogin />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import { ProtectedDashBoard } from "./components/DashBoard";
// import { UnProtectedLogin } from "./components/Login";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<ProtectedDashBoard />} />
//           <Route path="/login" element={<UnProtectedLogin />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

// import TaskList from "./components/TaskList";

// const App = () => {
//   return <TaskList></TaskList>;
// };

// export default App;

// import EscapeKeyListener from "./components/EscapeKeyListener";
// const App: React.FC = () => {
//   return (
//     <EscapeKeyListener>
//       {({ isEscapePressed }) => (
//         <div style={{ padding: 20 }}>
//           <h2>Escape Key status</h2>
//           <p>
//             {isEscapePressed ? (
//               <span style={{ color: "red" }}>EscapeKey is Pressed</span>
//             ) : (
//               "Press the Escape key.."
//             )}
//           </p>
//         </div>
//       )}
//     </EscapeKeyListener>
//   );
// };

// export default App;
// import React from "react";
// import IsOnlineHOC from "./hoc/isOnlineHOC"; // note: component name should be PascalCase for React components

// export const OnLineComponent: React.FC = () => {
//   return <div>Click Me</div>;
// };

// export const OffLineComponent: React.FC = () => {
//   return <div>User is OffLine</div>;
// };

// const App = () => {
//   return (
//     <IsOnlineHOC>
//       {(isOnline) =>
//         isOnline ? <OnLineComponent /> : <OffLineComponent />
//       }
//     </IsOnlineHOC>
//   );
// };

// export default App;

// import React from "react";
// import Navbar from "../src/components/Navbar";

// const sectionStyle: React.CSSProperties = {
//   height: "100vh",
//   paddingTop: "120px",
// };

// const App: React.FC = () => {
//   return (
//     <div>
//       <Navbar />
//       <section id="home" style={sectionStyle}>
//         <h1>Home</h1>
//       </section>
//       <section id="about" style={sectionStyle}>
//         <h1>About</h1>
//       </section>
//       <section id="contact" style={sectionStyle}>
//         <h1>Contact</h1>
//       </section>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import withTooltip from "../src/hoc/withTooltip";

// type ButtonProps = {
//   label: string;
// };

// const Button: React.FC<ButtonProps> = ({ label }) => {
//   return <button>{label}</button>;
// };

// const ButtonWithTooltip = withTooltip(Button, "Click me!");

// const App: React.FC = () => {
//   return (
//     <div style={{ padding: 20 }}>
//       <ButtonWithTooltip label="Submit" />
//     </div>
//   );
// };

// export default App;

import useTablePagination from "./components/useTablePagination";

const data = Array.from({ length: 95 }, (_, i) => `Item ${i + 1}`);

function PaginatedTable() {
  const {
    currentPage,
    pageSize,
    startIndex,
    endIndex,
    setPage,
    resetPage,
    updatePageSize,
  } = useTablePagination(10);

  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div>
      <h2>Paginated Table</h2>

      <ul>
        {currentData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>
          Page Size:{" "}
          <select
            value={pageSize}
            onChange={(e) => updatePageSize(e.target.value)}
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>

        <button onClick={resetPage} style={{ marginLeft: 10 }}>
          Reset to Page 1
        </button>
      </div>
    </div>
  );
}

export default PaginatedTable;
