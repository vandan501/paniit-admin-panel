import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Programcreation from "./Pages/Programcreation.jsx";
import Accountmanagement from "./Pages/Accountmanagement.jsx";
import Teacherenrollment from "./Pages/Teacherenrollment.jsx";
import Studentenrollment from "./Pages/Studentenrollment.jsx";
import Selfenrollment from "./Pages/Selfenrollment.jsx";
import Batchmanagement from "./Pages/Batchmanagement.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/programcreation" element={<Programcreation />} />
          <Route path="/accountmanagement" element={<Accountmanagement />} />
          <Route path="/teacherenrollment" element={<Teacherenrollment />} />
          <Route path="/studentenrollment" element={<Studentenrollment />} />
          <Route path="/selfenrollname" element={<Selfenrollment />} />
          <Route path="/batchmanagement" element={<Batchmanagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
