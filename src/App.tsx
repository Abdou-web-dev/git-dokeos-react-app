import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import MainNavBar from "./components/MainNavBar";
import NotFound from "./components/NotFound";
import Catalogue from "./pages/Catalogue";
import Module from "./pages/Module";
import Parameters from "./pages/Parameters";
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
            <Route path="/params" element={<Parameters />} />
            <Route path="/partner" element={<Partener />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
