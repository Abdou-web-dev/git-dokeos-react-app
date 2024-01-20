import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import MainNavBar from "./components/MainNavBar";
import NotFound from "./components/NotFound";
import Catalogue from "./pages/Catalogue";
import Module from "./pages/Module";
import ParametersCustom from "./pages/ParametersCustom";
import CertificateTable from "./pages/ParametersRecap";
import Partener from "./pages/Partener";
import Status from "./pages/Status";
import Training from "./pages/Training";
import Users from "./pages/Users";
import "./styles/globalStyles.scss";

function App() {
  return (
    <Router>
      <div className="app-container">
        <AppBar />

        <div className="content-container">
          <MainNavBar />
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/status" element={<Status />} />
            <Route path="/training" element={<Training />} />
            <Route path="/module" element={<Module />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/params/*" element={<ParamsRoutes />} />
            <Route path="/partner" element={<Partener />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function ParamsRoutes() {
  return (
    <Routes>
      <Route path="recap" element={<CertificateTable />} />
      <Route path="custom" element={<ParametersCustom />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
