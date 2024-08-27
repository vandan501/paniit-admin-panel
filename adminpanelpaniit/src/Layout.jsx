import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import mainlogo from "./Images/mainlogo.png";

// Import white icons
import ProgramCreationIconWhite from "./icons/program-creation-white.png";
import AccountIconWhite from "./icons/accountmanagement-white.png";
import TeacherIconWhite from "./icons/teacherenrollment-white.png";
import StudentIconWhite from "./icons/student-enrollment-white.png";
import SelfEnrollmentIconWhite from "./icons/selfenrollment-white.png";
import BatchManagementIconWhite from "./icons/batchmanagement-white.png";

// Import blue icons
import ProgramIconBlue from "./icons/programcreation-blue.png";
import AccountIconBlue from "./icons/accountmanagement-blue.png";
import TeacherIconBlue from "./icons/teacherenrollment-blue.png";
import StudentIconBlue from "./icons/studentenrollment-blue.png";
import SelfEnrollmentIconBlue from "./icons/self-enrollment-blue.png";
import BatchManagementIconBlue from "./icons/batchmanagement-blue.png";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getIcon = (path, whiteIcon, blueIcon) => {
    return location.pathname === path ? whiteIcon : blueIcon;
  };

  return (
    <div className="layout-container">
      <header className="header"></header>
      <section className="dashboard-content">
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <CgMenuRightAlt className="toggle-icon" onClick={toggleSidebar} />

          {isSidebarOpen && (
            <ul>
              <div className="top-section">
                <img src={mainlogo} alt="logo" />
              </div>
              <h1>MENU</h1>
              <Link to="/programcreation">
                <li
                  className={
                    location.pathname === "/programcreation" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/programcreation",
                      ProgramCreationIconWhite,
                      ProgramIconBlue
                    )}
                    alt="Program Creation Icon"
                  />
                  Program Creation
                </li>
              </Link>
              <Link to="/accountmanagement">
                <li
                  className={
                    location.pathname === "/accountmanagement" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/accountmanagement",
                      AccountIconWhite,
                      AccountIconBlue
                    )}
                    alt="Account Management Icon"
                  />
                  Account Management
                </li>
              </Link>
              <Link to="/teacherenrollment">
                <li
                  className={
                    location.pathname === "/teacherenrollment" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/teacherenrollment",
                      TeacherIconWhite,
                      TeacherIconBlue
                    )}
                    alt="Teacher Enrollment Icon"
                  />
                  Teacher Enrollment
                </li>
              </Link>
              <Link to="/studentenrollment">
                <li
                  className={
                    location.pathname === "/studentenrollment" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/studentenrollment",
                      StudentIconWhite,
                      StudentIconBlue
                    )}
                    alt="Student Enrollment Icon"
                  />
                  Student Enrollment
                </li>
              </Link>
              <Link to="/selfenrollname">
                <li
                  className={
                    location.pathname === "/selfenrollname" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/selfenrollname",
                      SelfEnrollmentIconWhite,
                      SelfEnrollmentIconBlue
                    )}
                    alt="Self Enrollment Icon"
                  />
                  Self Enrollment
                </li>
              </Link>
              <Link to="/batchmanagement">
                <li
                  className={
                    location.pathname === "/batchmanagement" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/batchmanagement",
                      BatchManagementIconWhite,
                      BatchManagementIconBlue
                    )}
                    alt="Batch Management Icon"
                  />
                  Batch Management
                </li>
              </Link>
            </ul>
          )}
        </aside>
        <main className="main-content">{children}</main>
      </section>
    </div>
  );
};

export default Layout;
