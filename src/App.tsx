import MainForm from "./components/MainForm/MainForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import RecordDownload from "./components/RecordDownload/RecordDownload";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainForm />}></Route>{" "}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/record-download" element={<RecordDownload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
