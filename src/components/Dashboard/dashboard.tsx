import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";

import {
  Box,
  Grid,
  InputLabel,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Button,
  TextField,
} from "@mui/material";
import Header from "../Shared/Header/Header";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import { Approve, UserCount, userDetail } from "../Api/DashBoardAction";
import CustomModal from "../Modal/ApproveModal";
import RejectModal from "../Modal/RejectionModal";

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

const Dashboard = () => {
  const [userData, setUserData] = useState();
  const [totalUserApprove, setTotalUserApprove] = useState();
  const [totalUserReject, setTotalUserReject] = useState();
  const [userDetails, setUserDetails] = useState([]);
  const [commentdata, setCommentData] = useState();
  const [currentIndex, setcurrentIndex] = useState();
  const [certificateData, setCertificateData] = useState();
  const [open, setOpen] = React.useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseModal = () => setOpenRejectModal(false);
  const handleOpen = (index: any) => {
    setOpen(true);
    setcurrentIndex(index);
  };

  const handleRejectMOdal = (index: any) => {
    setOpenRejectModal(true);
    setcurrentIndex(index);
  };

  const handleChnage = (e: any) => {
    setCommentData(e?.target?.value);
  };

  const handleCertificateValue = (e: any) => {
    setCertificateData(e?.target?.value);
  };

  useEffect(() => {
    const Logintoken = localStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
    };

    UserCount(obj)
      .then((response) => {
        setUserData(response?.data?.totalUsers);
        setTotalUserApprove(response?.data?.totalUsersApprove);
        setTotalUserReject(response?.data?.totalUsersReject);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const Logintoken = localStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
    };

    userDetail(obj)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApprove = () => {
    const Logintoken = localStorage.getItem("LoginToken");

    const obj = {
      loginToken: Logintoken,
      userId: currentIndex,
      approveAppointmentDate: "09-20-2023",
      approveRequestCertificate: certificateData,
      approveMessage: commentdata,
    };
    Approve(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Header />
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            margin: "30px",
          }}
        >
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h5"
            component="h2"
            color={"rgb(70, 70, 201)"}
          >
            Dashboard
          </Typography>

          <Box
            p={1}
            sx={{
              ":hover": {
                bgcolor: "#AF5",
                color: "white",
              },
            }}
          >
            Eng
          </Box>
          <Box
            p={1}
            sx={{
              ":hover": {
                bgcolor: "#AF5",
                color: "white",
              },
            }}
          >
            Guj
          </Box>
        </Box>
      </div>

      <Grid
        container
        sx={{ justifyContent: "space-around", marginTop: "20px" }}
      >
        <Grid item xs={3} sx={{ border: "1px solid green", height: "100px" }}>
          <Typography
            sx={{ marginTop: "20px" }}
            align="center"
            variant="h5"
            component="h6"
            color={"rgb(70, 70, 201)"}
          >
            {userData}
          </Typography>
          <Typography align="center">Number of Application Accept</Typography>
        </Grid>
        <Grid item xs={3} sx={{ border: "1px solid green", height: "100px" }}>
          <Typography
            sx={{ marginTop: "20px" }}
            align="center"
            variant="h5"
            component="h6"
            color={"rgb(70, 70, 201)"}
          >
            {totalUserApprove}
          </Typography>
          <Typography align="center">Number of Application Reject</Typography>
        </Grid>
        <Grid item xs={3} sx={{ border: "1px solid green", height: "100px" }}>
          <Typography
            sx={{ marginTop: "20px" }}
            align="center"
            variant="h5"
            component="h6"
            color={"rgb(70, 70, 201)"}
          >
            {totalUserReject}
          </Typography>
          <Typography align="center">Number of Application Receive</Typography>
        </Grid>
      </Grid>

      <TableContainer
        component={Paper}
        sx={{ justifyContent: "space-around" }}
        aria-label="customized table"
      >
        <Table
          sx={{ minWidth: 650, marginTop: "20px" }}
          aria-label="simple table"
        >
          <TableHead sx={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell align="center" sx={{ color: "white" }}>
                Husband Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Wife Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Email
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Mobile No
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDetails?.map((item: any, index: any) => {
              console.log("itrem", item);

              return (
                <TableRow key={index}>
                  <TableCell align="center">
                    {item?.husbandDetails?.surname} {item?.husbandDetails?.name}
                  </TableCell>
                  <TableCell align="center">
                    {item?.wifeDetails?.surname} {item?.wifeDetails?.name}
                  </TableCell>
                  <TableCell align="center">
                    {item?.husbandDetails?.emailId}
                  </TableCell>
                  <TableCell align="center">
                    {item?.husbandDetails?.mobileNumber}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginRight: "10px" }}
                      onClick={handleOpen}
                    >
                      Approve
                    </Button>{" "}
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginRight: "10px" }}
                      onClick={handleRejectMOdal}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginRight: "10px" }}
                    >
                      View
                    </Button>
                    <Button variant="contained" color="success">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomModal open={open} handleClose={handleClose} />
      <RejectModal open={openRejectModal} handleClose={handleCloseModal} />
    </>
  );
};
export default Dashboard;
