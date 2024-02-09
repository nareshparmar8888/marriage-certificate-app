import { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import Header from "../Shared/Header/Header";
import { UserCount, userDetail } from "../Api/DashBoardAction";
import { useDispatch } from "react-redux";
import { setUserDatas } from "../reducer/dashboardReducer";

import Loader from "../../Loader/Loader";
import "./style.scss";
import { UserDetails, userData } from "../Interface/Interface";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<number>(0);
  const [totalUserApprove, setTotalUserApprove] = useState<number>(0);
  const [totalUserReject, setTotalUserReject] = useState<number>(0);
  const [userDetails, setUserDetails] = useState<UserDetails[]>([]);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch();
  let modal = false;

  useEffect(() => {
    setLoadingPage(true);
    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
    };

    UserCount(obj)
      .then((response: userData) => {
        setUserData(response?.data?.totalUsers);
        setTotalUserApprove(response?.data?.totalUsersApprove);
        setTotalUserReject(response?.data?.totalUsersReject);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoadingPage(false);
  }, []);

  useEffect(() => {
    setLoadingPage(true);

    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
    };

    userDetail(obj)
      .then((response) => {
        dispatch(setUserDatas(response.data));
        setUserDetails(response.data);
        setUserData(response?.data?.length);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  }, [dispatch, modal]);

  const handleChange = (e: any) => {
    setSearchValue(e?.target?.value);
  };

  useEffect(() => {
    setLoadingPage(true);

    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,

      search: searchValue,
    };
    userDetail(obj)
      .then((response) => {
        setUserData(response?.data?.length);
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoadingPage(false);
      });
    if (searchValue === "") {
      setLoadingPage(true);

      const Logintoken = sessionStorage.getItem("LoginToken");
      const obj = {
        loginToken: Logintoken,
      };
      userDetail(obj)
        .then((response) => {
          setUserData(response?.data?.length);
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoadingPage(false);
        });
    }
  }, [searchValue]);

  const handleSearch = () => {
    setLoadingPage(true);

    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,

      search: searchValue,
    };
    userDetail(obj)
      .then((response) => {
        setUserData(response?.data?.length);
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoadingPage(false);
      });
    if (searchValue === "") {
      setLoadingPage(true);

      const Logintoken = sessionStorage.getItem("LoginToken");
      const obj = {
        loginToken: Logintoken,
      };
      userDetail(obj)
        .then((response) => {
          setUserData(response?.data?.length);
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoadingPage(false);
        });
    }
  };

  const navigate = useNavigate();

  const downloadRecord = () => {
    navigate("/record-download");
  };

  return (
    <>
      <Header />
      <div className="dashboard_modal">
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
                cursor: "pointer",
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
                cursor: "pointer",
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

      <div className="search-box">
        <TextField
          label="Search"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={searchValue}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{ marginRight: "1rem" }}
          onClick={handleSearch}
        >
          Seach
        </Button>
        <Button
          variant="contained"
          color="success"
          size="medium"
          sx={{ marginRight: "1rem" }}
          onClick={downloadRecord}
        >
          DownLoad Record
        </Button>
      </div>

      {/* <TableContainer
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
            {loadingPage ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <div className="loading_process"> Loading... </div>
                </TableCell>
              </TableRow>
            ) : !isEmpty(userDetail) ? (
              userDetails?.map((item: any, index: any) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">
                      {item?.husbandDetails?.surname}{" "}
                      {item?.husbandDetails?.name}
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
                      <Button
                        variant="contained"
                        color="info"
                        onClick={() => downloadUserData(item?._id)}
                      >
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <div className="no_data">No Data</div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer> */}
      <Table userDetails={userDetails} modal={modal} />
      {console.log("useDetail", userDetail)}

      {/* <App /> */}
      {/* <CustomModal
        open={open}
        handleClose={handleClose}
        currentIndex={currentIndex}
        onApproveSuccess={userDataApi}
      />
      <RejectModal
        open={openRejectModal}
        handleClose={handleCloseModal}
        currentIndex={currentIndex || ""}
        onRejectSuccess={userDataApi}
      />
      <ProfileModal
        open={openProfileModal}
        handleClose={handleCloseProfileModal}
        storeId={storeId}
      /> */}

      {/* {userData >= 3 && (
        <Pagination
          count={paginationSize}
          onChange={handleClickPage}
          variant="outlined"
          shape="rounded"
          size="large"
          className="pagination"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
      )} */}
      <Loader open={loadingPage} />
    </>
  );
};

export default Dashboard;
