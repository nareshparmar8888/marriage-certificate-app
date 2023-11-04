import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/footer";
import "./style.scss";
const UserDashboard = (props: any) => {
  const { loginData } = props;
  const [userData, setUserData] = useState([]);
  console.log("loginData", loginData);
  return (
    <>
      <Header />
      <div className="main">
        <div className="userDetail">
          <div>Application Number: 123</div>
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
