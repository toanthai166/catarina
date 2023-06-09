import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import NotFoundPage from "../../pages/NotFoundPage";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
// const DashboardStyles = styled.div`
//   max-width: 1600px;
//   margin: 0 auto;
//   .dashboard {
//     &-heading {
//       font-weight: bold;
//       font-size: 36px;
//       margin-bottom: 40px;
//       color: ${(props) => props.theme.primary};
//       letter-spacing: 1px;
//     }
//     &-main {
//       display: grid;
//       grid-template-columns: 300px minmax(0, 1fr);
//       padding: 40px 20px;
//       gap: 0 40px;
//       align-items: start;
//     }
//   }
// `;
const DashboardLayout = ({ children }) => {
  const { userInfo } = useAuth();
  if (!userInfo) return <NotFoundPage></NotFoundPage>;
  return (
    <>
      <DashboardHeader></DashboardHeader>
      <div className="flex py-10 px-5 gap-10 items-start">
        <Sidebar></Sidebar>
        <div className="w-[80%]">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
