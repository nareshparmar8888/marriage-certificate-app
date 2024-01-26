import { useEffect, useState } from "react";
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { Approve } from "../Api/DashBoardAction";

const customModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
  width: "40rem",
};

const backdropStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
};

const CustomModal = (props: any) => {
  const { open, handleClose, currentIndex } = props;
  const [certificateData, setCertificateData] = useState();
  const [disable, setDisble] = useState(true);
  const [commentdata, setCommentData] = useState();
  const [approveDate, setApproveDate] = useState();
  const handleCertificateValue = (e: any) => {
    setCertificateData(e?.target?.value);
  };

  useEffect(() => {
    if (
      approveDate !== null &&
      certificateData !== null &&
      commentdata !== null
    ) {
      setDisble(false);
    } else {
      setDisble(true);
    }
  }, []);

  const handleApprove = () => {
    const Logintoken = sessionStorage.getItem("LoginToken");

    const obj = {
      loginToken: Logintoken,
      userId: currentIndex,
      approveAppointmentDate: approveDate,
      approveRequestCertificate: certificateData,
      approveMessage: commentdata,
    };
    Approve(obj)
      .then((response) => {
        if (response) {
          handleClose();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChnage = (e: any) => {
    setCommentData(e);
  };

  const handleDateChange = (e: any) => {
    setApproveDate(e);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ zIndex: 9999, ...backdropStyle }}
    >
      <Box sx={customModalStyle}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Approve Application
            </Typography>
            <hr />
          </div>
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              marginTop: "0.5rem",
            }}
          >
            <div style={{ alignItems: "center" }}>
              Date/Time:
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Enter Date"
                    value={approveDate}
                    onChange={handleDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div
              style={{
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              Number of documents:
              <TextField
                variant="outlined"
                style={{ width: "100%", marginTop: "0.7rem" }}
                value={certificateData}
                type="Number"
                onChange={handleCertificateValue}
              />
            </div>

            <div
              style={{
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              Comments:
              <TextareaAutosize
                style={{ width: "100%", marginTop: "0.7rem" }}
                minRows={5}
                value={commentdata}
                onChange={(e) => handleChnage(e?.target?.value)}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
            onClick={handleApprove}
            disabled={disable}
          >
            Approve
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;
