import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/footer";
import "./style.scss";
const UserDashboard = () => {
  const getData = sessionStorage.getItem("LoginData");
  const convertLoginData = getData !== null ? JSON.parse(getData) : null;
  return (
    <>
      <Header />
      <div className="main">
        <div className="userDetail">
          <div>Application Number: {convertLoginData?._id}</div>
          <div>
            Application Name: {convertLoginData?.husbandDetails?.name}{" "}
            {convertLoginData?.husbandDetails?.surname}
          </div>
          <div>
            Application status:{" "}
            <span className="status">
              {convertLoginData?.applicationStatus}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
