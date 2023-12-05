import React, { useEffect, useState } from "react";
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Reject } from "../Api/DashBoardAction";

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

const RejectModal = (props: any) => {
  const { open, handleClose, currentIndex } = props;
  const [commentdata, setCommentData] = useState("");
  const [checkboxState, setCheckboxState] = useState({
    husbandSchoolLeavingCertificateStatus: false,
    wifeSchoolLeavingCertificateStatus: false,
    witnessOnePhotoProofStatus: false,
    witnessTwoPhotoProofStatus: false,
    agreementStampStatus: false,
    husbandPhotoIdProofStatus: false,
    wifePhotoIdProofStatus: false,
    priestPhotoIdProofStatus: false,
    marriageEvidenceStatus: false,
  });

  useEffect(() => {
    console.log("checkBoxState", checkboxState);
  }, [checkboxState]);

  const handleCheckboxChange = (event: any) => {
    const { name } = event.target;
    setCheckboxState((prev: any) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleChnage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData(e.target.value);
  };

  const handleRejectModal1 = () => {
    const Logintoken = localStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
      userId: currentIndex,
      rejectedMessage: commentdata,
      husbandSchoolLeavingCertificateStatus:
        checkboxState.husbandSchoolLeavingCertificateStatus,
      wifeSchoolLeavingCertificateStatus:
        checkboxState.wifeSchoolLeavingCertificateStatus,
      witnessOnePhotoProofStatus: checkboxState.witnessOnePhotoProofStatus,
      witnessTwoPhotoProofStatus: checkboxState.witnessTwoPhotoProofStatus,
      agreementStampStatus: checkboxState.agreementStampStatus,
      husbandPhotoIdProofStatus: checkboxState.husbandPhotoIdProofStatus,
      wifePhotoIdProofStatus: checkboxState.wifePhotoIdProofStatus,
      priestPhotoIdProofStatus: checkboxState.priestPhotoIdProofStatus,
      marriageEvidenceStatus: checkboxState.marriageEvidenceStatus,
    };
    Reject(obj).then((response) => {
      console.log("response", response);
    });
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
              Reject Application
            </Typography>
            <hr />
          </div>
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              Rejection Message:
              <TextareaAutosize
                style={{ width: "100%", marginTop: "0.7rem" }}
                minRows={5}
                value={commentdata}
                onChange={handleChnage}
              />
            </div>
          </div>
        </div>
        <FormGroup style={{ marginLeft: "0.7rem" }}>
          {Object.entries(checkboxState).map(([name, checked]) => (
            <FormControlLabel
              key={name}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  name={name}
                />
              }
              label={name}
            />
          ))}
        </FormGroup>

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
            onClick={handleRejectModal1}
          >
            Reject
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default RejectModal;
