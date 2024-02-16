import MainForm from "./components/MainForm/MainForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import RecordDownload from "./components/RecordDownload/RecordDownload";
import Protected from "./PrivateRoute";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainForm />}></Route>{" "}
          <Route
            path="/dashboard"
            element={<Protected Component={Dashboard} />}
          />
          <Route
            path="/userDashboard"
            element={<Protected Component={UserDashboard} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/record-download"
            element={<Protected Component={RecordDownload} />}
          />
          <Route path="/set-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
