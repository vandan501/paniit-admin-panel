import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import mainlogo from "./Images/mainlogo.png";
import programiconwhite from "./icons/program-creation-white.png";
import programiconblue from "./icons/programcreation-blue.png";
import accounticonwhite from "./icons/accountmanagement-white.png";
import accounticonblue from "./icons/accountmanagement-blue.png";
import teachericonwhite from "./icons/teacherenrollment-white.png";
import teahericonblue from "./icons/teacherenrollment-blue.png";
import studenticonwhite from "./icons/student-enrollment-white.png";
import studenticonblue from "./icons/studentenrollment-blue.png";
import selfenrollmenticonwhite from "./icons/selfenrollment-white.png";
import selfenrollmenticonblack from "./icons/self-enrollment-blue.png";
import batchmanagementiconwhite from "./icons/batchmanagement-white.png";
import batchmanagementiconblue from "./icons/batchmanagement-blue.png";
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="layout-container">
      <header className="header">Header</header>
      <section className="dashboard-content">
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <CgMenuRightAlt className="toggle-icon" onClick={toggleSidebar} />

          {isSidebarOpen && (
            <ul>
              <div className="top-section">
                <img src={mainlogo} alt="logo" />
              </div>
              <h2>Menu</h2>
              <li
                className={
                  location.pathname === "/programcreation" ? "active" : ""
                }
              >
                <img src={programiconwhite} className="flex-icon" alt="icon" />
                <Link to="/programcreation">Program Creation</Link>
              </li>
              <li
                className={
                  location.pathname === "/accountmanagement" ? "active" : ""
                }
              >
                <Link to="/accountmanagement">Account Management</Link>
              </li>
              <li
                className={
                  location.pathname === "/teacherenrollment" ? "active" : ""
                }
              >
                <Link to="/teacherenrollment">Teacher Enrollment</Link>
              </li>
              <li
                className={
                  location.pathname === "/studentenrollment" ? "active" : ""
                }
              >
                <Link to="/studentenrollment">Student Enrollment</Link>
              </li>
              <li
                className={
                  location.pathname === "/selfenrollname" ? "active" : ""
                }
              >
                <Link to="/selfenrollname">Self Enrollment</Link>
              </li>
              <li
                className={
                  location.pathname === "/batchmanagement" ? "active" : ""
                }
              >
                <Link to="/batchmanagement">Batch Management</Link>
              </li>
            </ul>
          )}
        </aside>
        <main className="main-content">{children}</main>
      </section>
    </div>
  );
};

export default Layout;
