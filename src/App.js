import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Teams from "./components/TeamPage";
import Dashboard from "./components/DashboardPage";
import Documentation from "./components/DocumentationPage";
import ExportedData from "./components/exportedData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/team" element={<Teams />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/data" element={<ExportedData />} />
    </Routes>
  );
}

export default App;
