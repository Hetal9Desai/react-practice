// import withAuthProtection from "../hoc/WithAuthProtection";

// const Dashboard = () => {
//   return <div>Welcome Dashboard</div>;
// };

// const ProtectedDashBoard = withAuthProtection(Dashboard);

// export default ProtectedDashBoard;

import WithAuthProtection from "../hoc/WithAuthProtection";

const DashBoard = () => {
  return <div>Welcome to DashBoard Page!</div>;
};
export const ProtectedDashBoard = WithAuthProtection(DashBoard);
export default DashBoard;
