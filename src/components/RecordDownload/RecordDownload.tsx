import { useCallback, useEffect, useState } from "react";
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
import { DownloadData, UserCount, userDetail } from "../Api/DashBoardAction";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import ProfileModal from "../Modal/ProfileModal/ProfileModal";
import { setUserDatas } from "../reducer/dashboardReducer";
import CustomModal from "../Modal/ApproveModal/ApproveModal";
import RejectModal from "../Modal/RejectModal/RejectionModal";
import { isEmpty } from "../../isEmpty";
import Loader from "../../Loader/Loader";
import {
  UserDetails,
  downloadUserData,
  userData,
} from "../Interface/Interface";

const RecordDownload: React.FC = () => {
  const [userData, setUserData] = useState<number>(0);
  const [totalUserApprove, setTotalUserApprove] = useState<number>(0);
  const [totalUserReject, setTotalUserReject] = useState<number>(0);
  const [userDetails, setUserDetails] = useState<UserDetails[]>([]);
  const [currentIndex, setcurrentIndex] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [openRejectModal, setOpenRejectModal] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [EndIndex, setEndIndex] = useState<number>(3);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [openProfileModal, setOpenProfileModel] = useState<boolean>(false);
  const [storeId, setStoreId] = useState<string>();
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debounceSearchValue = useDebounce(searchValue.trim(), 500);

  const handleCloseModal = () => {
    setOpenRejectModal(false);
  };

  const handleOpen = (index: string) => {
    setOpen(true);
    setcurrentIndex(index);
  };
  const handleRejectMOdal = (index: string) => {
    setOpenRejectModal(true);
    setcurrentIndex(index);
  };

  const handleOpenProfileModal = (index: string) => {
    setOpenProfileModel(true);
    setStoreId(index);
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

  let lastIndex: number;
  const handleClickPage = (e: any, page: number) => {
    if (page === 1) {
      setStartIndex(0);
      setEndIndex(3);
    } else if (page === 2) {
      setStartIndex(startIndex + 3);
      setEndIndex(page * 3);
      lastIndex = startIndex + 3;
    } else {
      setStartIndex(lastIndex + 3);
      setEndIndex(page * 3);
    }
  };

  const userDataApi = () => {
    setLoadingPage(true);

    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
      start: startIndex,
      end: EndIndex,
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
  }, [startIndex, EndIndex, dispatch]);

  const downloadUserData = (userId: string) => {
    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
      userId: userId,
    };
    DownloadData(obj)
      .then((response: downloadUserData) => {
        window.open(response?.data, "_blank");
      })
      .catch((error: any) => {
        console.error(error);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  };

  const handleChange = (e: any) => {
    setSearchValue(e?.target?.value);
  };

  const handleSearch = useCallback(() => {
    if (searchValue !== "") {
      setLoadingPage(true);

      const Logintoken = sessionStorage.getItem("LoginToken");
      const obj = {
        loginToken: Logintoken,
        start: startIndex,
        end: EndIndex,
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
    }
  }, [searchValue]);

  useEffect(() => {
    handleSearch();
  }, [debounceSearchValue]);

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
            Application Record Download
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

      <div
        className="heading-date"
        style={{ fontSize: "29px", fontWeight: "500", marginLeft: "5rem" }}
      >
        Date :
      </div>

      <div
        className="search-box"
        style={{ justifyContent: "flex-start", marginLeft: "7rem" }}
      >
        <div style={{ fontSize: "20px", fontWeight: "500" }}>From:</div>
        <TextField
          label="Search"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={searchValue}
        />
      </div>

      <div
        className="search-box"
        style={{ justifyContent: "flex-start", marginLeft: "7rem" }}
      >
        <div style={{ fontSize: "20px", fontWeight: "500" }}>To:</div>
        <TextField
          label="Search"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={searchValue}
          style={{ marginLeft: "1.8rem" }}
        />
      </div>
      <Button
        variant="contained"
        size="medium"
        sx={{ marginLeft: "11.7rem", marginTop: "2rem" }}
        onClick={handleSearch}
      >
        Download
      </Button>

      {console.log("useDetail", userDetail)}

      <Loader open={loadingPage} />
    </>
  );
};

export default RecordDownload;
