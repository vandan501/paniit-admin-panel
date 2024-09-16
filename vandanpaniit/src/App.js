import { Route, BrowserRouter as Router, Routes,Navigate } from "react-router-dom";
import "./custom.css";
import Layout from "./Layout";
import Programcreation from "./Pages/Programcreation.jsx";
import Accountmanagement from "./Pages/Accountmanagement.jsx";
import Teacherenrollment from "./Pages/Teacherenrollment.jsx";
import Studentenrollment from "./Pages/Studentenrollment.jsx";
import Selfenrollment from "./Pages/Selfenrollment.jsx";
import TeacherPanel from "./Pages/TeacherPanel.jsx"
import Batchmanagement from "./Pages/Batchmanagement.jsx";
import BatchDetails from "./Pages/BatchDetails.jsx"
// import { HelmetProvider, Helmet } from "react-helmet-async";
function App() {
  return (
    // <HelmetProvider>
    <Router>
      {/* <Layout> */}
        <Routes>
        <Route path="/managementpanel" element={<Navigate to="/managementpanel/program" />} />

        <Route path="managementpanel" element={<Layout />}>
          <Route path="program" element={<Programcreation />} />
          <Route path="account" element={<Accountmanagement />} />
          <Route path="teacher/enrollment" element={<Teacherenrollment />} />
          <Route path="student/enrollment" element={<Studentenrollment />} />
          <Route path="enrollment" element={<Selfenrollment />} />
          <Route path="batch" element={<Batchmanagement />} />
          <Route path="batch/batch-details" element={<BatchDetails />} />
          <Route path="teacherpanel" element={<TeacherPanel />} />
          {/* <Route path="batch-details" element={<BatchDetails />} /> */}
        </Route>

        </Routes>
      {/* </Layout> */}
    </Router>
    // </HelmetProvider>
  );
}

export default App;
