import "./App.scss";
import MainForm from "./components/MainForm/MainForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainForm />}></Route>
          {/* <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />{" "} */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userDashboard" element={<UserDashboard />} />
          {/* <PrivateRoute
            path="/dashboard"
            element={<Dashboard />}
            isAuthenticated={isAuthenticated}
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
