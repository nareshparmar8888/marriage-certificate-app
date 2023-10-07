import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/footer";
import "./style.scss";
const UserDashboard = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="userDetail">
          <div>Application Number: 4566788</div>
          <div>Application Name: Smith wolker</div>
          <div>
            Application status: <span className="status">Pending</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
