import Box from "@mui/material/Box";
import "./style.scss";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { userDetail } from "../components/Api/DashBoardAction";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  width: "auto",
};

interface allData {
  name: string;
}

export default function ProfileModal(props: any) {
  const { open, handleClose, storeId } = props;
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState<allData>();
  useEffect(() => {
    const Logintoken = localStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
      start: 0,
      end: 3,
    };

    userDetail(obj)
      .then((response) => {
        setData(response.data);
        if (storeId && response.data.length > 0) {
          const filteredData = response.data.filter(
            (item: any) => item._id === storeId
          );
          setFilterData(filteredData);
          console.log("Filtered data:", filteredData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [open, storeId, handleClose]);

  return (
    <div
      // className="modal fade"
      className={`modal ${open ? "fade show model fade data-dispaly" : ""}`}
      id="exampleModalLong"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              User Details
            </h5>

            <span aria-hidden="true" onClick={handleClose} className="close">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "20px" }}>
                  <span className="application" style={{ fontStyle: "bold" }}>
                    {" "}
                    Application Date{" "}
                  </span>
                  : 24-12-2012
                </div>
                <div>Merriage Date : 24-12-2012</div>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "500" }}>
                    Husband Detail
                  </span>
                  <div>Husband name : ABCD </div>
                  <div>Husband Age :21 </div>
                  <div>Husband religious :Hindu </div>
                  <div>Husband location :ahmedabad </div>
                  <div>Husband address :surat </div>
                </div>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "500" }}>
                    Husband Gardian Detail
                  </span>
                  <div>Husband name :ABCD </div>
                  <div>Husband Age :21 </div>
                  <div>Husband location :Hindu </div>
                  <div>Husband mobile :ahmedabad </div>
                  <div>Husband email :surat </div>
                </div>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div>
                    <span style={{ fontSize: "20px", fontWeight: "500" }}>
                      Wife Detail
                    </span>
                    <div>Wife name :ABCD </div>
                    <div>Wife Age :21 </div>
                    <div>Wife religious :Hindu </div>
                    <div>Wife location :ahmedabad </div>
                    <div>Wife address :surat </div>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: "20px", fontWeight: "500" }}>
                    Wife Gardian Detail
                  </span>
                  <div>Wife name :ABCD </div>
                  <div>Wife Age :21 </div>
                  <div>Wife location :Hindu </div>
                  <div>Wife mobile :ahmedabad </div>
                  <div>Wife email :surat </div>
                </div>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "500" }}>
                    Witness-1 Detail
                  </span>
                  <div>Witness-1 name :ABCD </div>
                  <div>Witness-1 Age :21 </div>
                  <div>Witness-1 Birthdate :ahmedabad </div>
                  <div>Witness-1 address :surat </div>
                </div>

                <div>
                  <span style={{ fontSize: "20px", fontWeight: "500" }}>
                    Witness-2 Detail
                  </span>
                  <div>Witness-2 name :ABCD </div>
                  <div>Witness-2 Age :21 </div>
                  <div>Witness-2 Birthdate :ahmedabad </div>
                  <div>Witness-2 address :surat </div>
                </div>
              </div>
              <hr />
              <div style={{ fontSize: "20px", fontWeight: "500" }}>
                Priest Detail
              </div>
              <div>
                <div>Priest name :ABCD </div>
                <div>Priest Age :21 </div>
                <div>Priest Birthdate :ahmedabad </div>
                <div>Priest address :surat </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
