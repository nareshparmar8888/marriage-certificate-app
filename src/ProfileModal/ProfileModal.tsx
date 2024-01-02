import "./style.scss";
import { useEffect, useState } from "react";
import { userDetail } from "../components/Api/DashBoardAction";
import { formatDate } from "../config";

export default function ProfileModal(props: any) {
  const { open, handleClose, storeId } = props;
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState<any>();
  useEffect(() => {
    const Logintoken = sessionStorage.getItem("LoginToken");
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

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <div
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
          {filterData && (
            <div className="modal-body">
              <div>
                <div
                  className="model-date"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <span className="application" style={{ fontStyle: "bold" }}>
                      {" "}
                      Application Date{" "}
                    </span>
                    : {currentDate}
                  </div>
                  <div style={{ marginLeft: "4rem" }}>
                    Merriage Date :{" "}
                    {formatDate(filterData[0]?.approveAppointmentDate)}
                  </div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        Husband Detail
                      </span>
                      <div>
                        Husband name : {filterData[0]?.husbandDetails?.name}{" "}
                      </div>
                      <div>
                        Husband Age :{filterData[0]?.husbandDetails?.age}{" "}
                      </div>
                      <div>
                        Husband religious :
                        {filterData[0]?.husbandDetails?.religious}{" "}
                      </div>
                      <div>
                        Husband location :
                        {filterData[0]?.husbandDetails?.location}{" "}
                      </div>
                      <div>
                        Husband address :
                        {filterData[0]?.husbandDetails?.address}{" "}
                      </div>
                    </div>
                    <br />
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        Husband Gardian Detail
                      </span>
                      <div>
                        Husband name :
                        {filterData[0]?.husbandDetails?.guardianDetails?.name}{" "}
                      </div>
                      <div>
                        Husband Age :
                        {filterData[0]?.husbandDetails?.guardianDetails?.age}{" "}
                      </div>
                      <div>
                        Husband location :
                        {
                          filterData[0]?.husbandDetails?.guardianDetails
                            ?.location
                        }{" "}
                      </div>
                      <div>
                        Husband mobile :
                        {
                          filterData[0]?.husbandDetails?.guardianDetails
                            ?.contactNumber
                        }{" "}
                      </div>
                      <div>
                        Husband email :
                        {filterData[0]?.husbandDetails?.guardianDetails?.email
                          ? filterData[0]?.husbandDetails?.guardianDetails
                              ?.email
                          : "N/A"}{" "}
                      </div>
                    </div>
                    <br />
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        Witness-1 Detail
                      </span>
                      <div>
                        Witness-1 name :{filterData[0]?.witnessOneDetails?.name}{" "}
                      </div>
                      <div>
                        Witness-1 Age :{filterData[0]?.witnessOneDetails?.age}{" "}
                      </div>
                      <div>
                        Witness-1 Birthdate :
                        {filterData[0]?.witnessOneDetails?.Birthdate}{" "}
                      </div>
                      <div>
                        Witness-1 address :
                        {filterData[0]?.witnessOneDetails?.address}{" "}
                      </div>
                    </div>
                    <br />
                    <div>
                      <div style={{ fontSize: "20px", fontWeight: "500" }}>
                        Priest Detail
                      </div>
                      <div style={{ marginBottom: "3rem" }}>
                        <div>
                          Priest name : {filterData[0]?.priestDetails?.name}{" "}
                        </div>
                        <div>
                          Priest Age : {filterData[0]?.priestDetails?.age}{" "}
                        </div>
                        <div>
                          Priest Birthdate :{" "}
                          {formatDate(
                            filterData[0]?.priestDetails?.dateOfBirth
                          )}{" "}
                        </div>
                        <div>
                          Priest address :{" "}
                          {filterData[0]?.priestDetails?.address}{" "}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <div>
                        <span style={{ fontSize: "20px", fontWeight: "500" }}>
                          Wife Detail
                        </span>
                        <div>
                          Wife name : {filterData[0]?.wifeDetails?.name}{" "}
                        </div>
                        <div>Wife Age : {filterData[0]?.wifeDetails?.age} </div>
                        <div>
                          Wife religious :{" "}
                          {filterData[0]?.wifeDetails?.religious}{" "}
                        </div>
                        <div>
                          Wife location : {filterData[0]?.wifeDetails?.location}{" "}
                        </div>
                        <div>
                          Wife address : {filterData[0]?.wifeDetails?.address}{" "}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        Wife Gardian Detail
                      </span>
                      <div>
                        Wife name :{" "}
                        {filterData[0]?.wifeDetails?.guardianDetails?.name}{" "}
                      </div>
                      <div>
                        Wife Age :
                        {filterData[0]?.wifeDetails?.guardianDetails?.age}{" "}
                      </div>
                      <div>
                        Wife location :
                        {filterData[0]?.wifeDetails?.guardianDetails?.location}{" "}
                      </div>
                      <div>
                        Wife mobile :
                        {
                          filterData[0]?.wifeDetails?.guardianDetails
                            ?.contactNumber
                        }{" "}
                      </div>
                      <div>
                        Wife email :
                        {filterData[0]?.wifeDetails?.guardianDetails?.email
                          ? filterData[0]?.wifeDetails?.guardianDetails?.email
                          : "N/A"}{" "}
                      </div>
                    </div>
                    <br />
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        Witness-2 Detail
                      </span>
                      <div>
                        Witness-2 name :{filterData[0]?.witnessTwoDetails?.name}{" "}
                      </div>
                      <div>
                        Witness-2 Age :{filterData[0]?.witnessTwoDetails?.age}{" "}
                      </div>
                      <div>
                        Witness-2 Birthdate :
                        {filterData[0]?.witnessTwoDetails?.Birthdate}{" "}
                      </div>
                      <div>
                        Witness-2 address :
                        {filterData[0]?.witnessTwoDetails?.address}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
