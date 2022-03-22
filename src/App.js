import "./App.css";
import Login from "./component/login/login";
import Register from "./component/register/Register";
import TransferPage from "./component/transferPage/transferPage";
import Dashboard from "./component/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transfer-page" element={<TransferPage />} />
      </Routes>
    </Router>
  );
}

export default App;
