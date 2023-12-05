import React, { useEffect, useState } from "react";
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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
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

const CustomModal = (props: any) => {
  const { open, handleClose, currentIndex } = props;
  const [certificateData, setCertificateData] = useState();

  const [commentdata, setCommentData] = useState();

  const handleCertificateValue = (e: any) => {
    setCertificateData(e?.target?.value);
  };

  const handleApprove = () => {
    const Logintoken = localStorage.getItem("LoginToken");

    const obj = {
      loginToken: Logintoken,
      userId: currentIndex,
      approveAppointmentDate: "09-20-2023",
      approveRequestCertificate: certificateData,
      approveMessage: commentdata,
    };
    console.log("data", obj.approveMessage);
    Approve(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChnage = (e: any) => {
    console.log("e", e?.target?.value);
    setCommentData(e);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
                  <DatePicker label="Enter Date" />
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
