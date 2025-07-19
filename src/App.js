import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import WeatherPage from "./pages/WeatherPage";
import NewsPage from "./pages/NewsPage";
import FinancePage from "./pages/FinancePage";
import Calculator from "./pages/Calculator";
import Checklist from "./pages/Checklist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
    </Router>
  );
}

export default App;