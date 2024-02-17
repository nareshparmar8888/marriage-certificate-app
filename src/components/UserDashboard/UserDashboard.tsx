import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/footer";
import "./style.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const UserDashboard = () => {
  const getData = sessionStorage.getItem("LoginData");
  const convertLoginData = getData !== null ? JSON.parse(getData) : null;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/", { state: { fillForm: "secondTime" } });
  };

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
          {convertLoginData?.applicationStatus === "Reject" ? (
            <Button
              variant="contained"
              sx={{ marginTop: "20px" }}
              onClick={handleNavigate}
            >
              Fill Form second time
            </Button>
          ) : (
            // <div
            //   style={{
            //     marginLeft: "20rem",
            //     marginRight: "20rem",
            //     marginTop: "20px",
            //   }}
            // >
            //   Regrettably, your application cannot be processed due to
            //   discrepancies. Please{" "}
            //   <span style={{ fontSize: "30px" }}>resubmit</span> the form for
            //   accurate details.
            // </div>
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
