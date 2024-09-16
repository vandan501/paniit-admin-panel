import React, { useState } from "react";
import { Link, useLocation ,Outlet} from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getIcon = (path, whiteIcon, blueIcon) => {
    return location.pathname === path ? whiteIcon : blueIcon;
  };

  return (
    <div className="layout-container">
      <header className="header">
        <div className="main-header-logo">
          <Link to={"/targetedpage"}>
            <img src={mainlogo} alt="paniit-logo" />
          </Link>
        </div>

        <div className="superadmin-dropdown">
          <div className="dropdown-trigger" onClick={toggleDropdown}>
            Super Admin
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
            </ul>
          )}
        </div>
      </header>
      <section className="dashboard-content">
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <CgMenuRightAlt className="toggle-icon" onClick={toggleSidebar} />

          {isSidebarOpen && (
            <ul>
              <div className="top-section">
                <img src={mainlogo} alt="logo" />
              </div>
              <h1>MENU</h1>
              <Link to="/managementpanel/program">
                <li
                  className={
                    location.pathname === "/managementpanel/program" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/managementpanel/program",
                      ProgramCreationIconWhite,
                      ProgramIconBlue
                    )}
                    alt="Program Creation Icon"
                  />
                  Program Creation
                </li>
              </Link>
              <Link to="/managementpanel/account">
                <li
                  className={
                    location.pathname === "/managementpanel/account" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/managementpanel/account",
                      AccountIconWhite,
                      AccountIconBlue
                    )}
                    alt="Account Management Icon"
                  />
                  Account Management
                </li>
              </Link>
              <Link to="/managementpanel/teacher/enrollment">
                <li
                  className={
                    location.pathname === "/managementpanel/teacher/enrollment" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/managementpanel/teacher/enrollment",
                      TeacherIconWhite,
                      TeacherIconBlue
                    )}
                    alt="Teacher Enrollment Icon"
                  />
                  Teacher Enrollment
                </li>
              </Link>
              <Link to="/managementpanel/student/enrollment">
                <li
                  className={
                    location.pathname === "/managementpanel/student/enrollment" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/managementpanel/student/enrollment",
                      StudentIconWhite,
                      StudentIconBlue
                    )}
                    alt="Student Enrollment Icon"
                  />
                  Student Enrollment
                </li>
              </Link>
              <Link to="/managementpanel/enrollment">
                <li
                  className={
                    location.pathname === "/managementpanel/enrollment" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/managementpanel/enrollment",
                      SelfEnrollmentIconWhite,
                      SelfEnrollmentIconBlue
                    )}
                    alt="Self Enrollment Icon"
                  />
                  Self Enrollment
                </li>
              </Link>
              <Link to="/managementpanel/batch">
                <li
                  className={
                    location.pathname === "/managementpanel/batch" ? "active" : ""
                  }
                >
                  <img
                    src={getIcon(
                      "/managementpanel/batch",
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
         <main className="main-content">
        <Outlet />
        </main> 
      </section>
    </div>
  );
};

export default Layout;
