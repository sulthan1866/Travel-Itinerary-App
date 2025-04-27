import MainDashboard from "./components/mainDashboard/MainDashboard";
import Onboarding from "./components/on boarding/Onboarding";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<MainDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
