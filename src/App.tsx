import "./App.scss";
import MainForm from "./components/MainForm/MainForm"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainForm />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;
