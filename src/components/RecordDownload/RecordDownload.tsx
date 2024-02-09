import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "../Shared/Header/Header";
import { shortByDate, userDetail } from "../Api/DashBoardAction";
import jsPDF from "jspdf";

import Loader from "../../Loader/Loader";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const RecordDownload: React.FC = () => {
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedDate = formattedMonth + "-" + formattedDay + "-" + year;

    return formattedDate;
  };

  const downloadUserData = async () => {
    setLoadingPage(true);
    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
      fromDate: fromDate,
      toDate: toDate,
    };

    try {
      const response = await shortByDate(obj);
      if (response && response.pdfUrl) {
        const a = document.createElement("a");
        a.href = response.pdfUrl;
        a.download = "userData.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error("PDF URL not found in the response.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPage(false);
    }
  };

  const handleFromDateChange = (newDate: any) => {
    setFromDate(formatDate(newDate));
  };

  const handleToDateChange = (newDate: any) => {
    setToDate(formatDate(newDate));
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

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Select a date"
              value={fromDate}
              onChange={handleFromDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      <div
        className="search-box"
        style={{ justifyContent: "flex-start", marginLeft: "7rem" }}
      >
        <div
          style={{ fontSize: "20px", fontWeight: "500", marginRight: "1.8rem" }}
        >
          To:
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Select a date"
              value={toDate}
              onChange={handleToDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <Button
        variant="contained"
        size="medium"
        sx={{ marginLeft: "11.7rem", marginTop: "2rem" }}
        onClick={downloadUserData}
      >
        Download
      </Button>
      <Loader open={loadingPage} />
    </>
  );
};

export default RecordDownload;
