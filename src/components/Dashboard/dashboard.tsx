import React, { Suspense, useEffect, useState } from "react";
// import { ChangeEvent } from "react";

import {
  Box,
  Grid,
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
// import axios from "axios";
// import Modal from "@material-ui/core/Modal";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { DatePicker } from "@mui/x-date-pickers";
import { Approve, UserCount, userDetail } from "../Api/DashBoardAction";
import CustomModal from "../Modal/ApproveModal";
import RejectModal from "../Modal/RejectionModal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import { TablePagination } from "@material-ui/core";
import Loader from "../Loader";
import ProfileModal from "../../ProfileModal/ProfileModal";
import { useDispatch } from "react-redux";
// import ProfileModal from "../../ProfileModal/ProfileModal";

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

interface UserDetails {
  husbandDetails: {
    name: string;
    surname: string;
    mobileNumber: number;
  };
  wifeDetails: {
    name: string;
    surname: string;
  };
  applicationStatus: any;
}

const Dashboard = () => {
  const [userData, setUserData] = useState(0);
  const [totalUserApprove, setTotalUserApprove] = useState();
  const [totalUserReject, setTotalUserReject] = useState();
  const [userDetails, setUserDetails] = useState<UserDetails[]>([]);
  const [currentIndex, setcurrentIndex] = useState();
  const [open, setOpen] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [EndIndex, setEndIndex] = useState(3);
  const [loadingPage, setLoadingPage] = useState(false);
  const [openProfileModal, setOpenProfileModel] = useState(false);
  const [storeId, setStoreId] = useState();
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleCloseModal = () => setOpenRejectModal(false);

  const handleOpen = (index: any) => {
    setOpen(true);
    setcurrentIndex(index);
  };
  const handleRejectMOdal = (index: any) => {
    setOpenRejectModal(true);
    setcurrentIndex(index);
  };

  const handleOpenProfileModal = (value: any) => {
    setOpenProfileModel(true);
    setStoreId(value);
  };

  const handleCloseProfileModal = () => setOpenProfileModel(false);

  let paginationSize = Math.ceil(userData / 3);

  useEffect(() => {
    setLoadingPage(true);
    const Logintoken = sessionStorage.getItem("LoginToken");
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
    setLoadingPage(false);
  }, []);

  let lastIndex: number;
  const handleClickPage = (e: any, page: number) => {
    if (page == 1) {
      setStartIndex(0);
      setEndIndex(3);
    } else if (page == 2) {
      setStartIndex(startIndex + 3);
      setEndIndex(page * 3);
      lastIndex = startIndex + 3;
    } else {
      setStartIndex(lastIndex + 3);
      setEndIndex(page * 3);
    }
  };

  useEffect(() => {
    setLoadingPage(true);

    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
      start: startIndex,
      end: EndIndex,
    };
    userDetail(obj)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  }, [startIndex, EndIndex]);

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
                Mobile No
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Status
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDetails?.map((item: any, index: any) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">
                    {item?.husbandDetails?.surname} {item?.husbandDetails?.name}
                  </TableCell>
                  <TableCell align="center">
                    {item?.wifeDetails?.surname} {item?.wifeDetails?.name}
                  </TableCell>

                  <TableCell align="center">
                    {item?.husbandDetails?.mobileNumber}
                  </TableCell>
                  <TableCell align="center">
                    {item?.applicationStatus}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginRight: "10px" }}
                      onClick={() => handleOpen(item?._id)}
                    >
                      Approve
                    </Button>{" "}
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ marginRight: "10px" }}
                      onClick={() => handleRejectMOdal(item?._id)}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ marginRight: "10px" }}
                      onClick={() => handleOpenProfileModal(item?._id)}
                    >
                      View
                    </Button>
                    <Button variant="contained" color="info">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomModal
        open={open}
        handleClose={handleClose}
        currentIndex={currentIndex}
      />
      <RejectModal
        open={openRejectModal}
        handleClose={handleCloseModal}
        currentIndex={currentIndex}
      />
      <ProfileModal
        open={openProfileModal}
        handleClose={handleCloseProfileModal}
        storeId={storeId}
      />

      <Pagination
        count={paginationSize}
        onChange={handleClickPage}
        variant="outlined"
        shape="rounded"
        size="large"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <Loader open={loadingPage} />
    </>
  );
};
export default Dashboard;
