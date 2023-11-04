import React, { useEffect, useState } from "react";
import { Modal, Typography, Box, TextField, Button } from "@material-ui/core";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers";

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
  const { open, handleClose } = props;
  const [certificateData, setCertificateData] = useState();

  const [commentdata, setCommentData] = useState();

  const handleChnage = (e: any) => {
    setCommentData(e?.target?.value);
  };

  const handleCertificateValue = (e: any) => {
    setCertificateData(e?.target?.value);
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
          </div>
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              Date/Time:
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Enter Date" />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              Request certificate:
              <TextField
                style={{ width: "100%" }}
                maxRows={4}
                value={certificateData}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              Comments:
              <TextField
                style={{ width: "100%" }}
                maxRows={4}
                value={commentdata}
                onChange={(e) => handleChnage(e.target.value)}
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
            // onClick={handleApprove}
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
