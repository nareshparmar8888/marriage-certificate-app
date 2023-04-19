import React from "react";
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
} from "@mui/material";
import Header from "../Shared/Header/Header";
import { BorderAllOutlined } from "@material-ui/icons";

const Dashboard = () => {
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
            20
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
            20
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
            20
          </Typography>
          <Typography align="center">Number of Application Accept</Typography>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{justifyContent: "space-around"}} aria-label="customized table">
        <Table sx={{ minWidth: 650, marginTop:"20px"}} aria-label="simple table">
          <TableHead sx={{backgroundColor:"black"}}>
            <TableRow>
              <TableCell align="center" sx={{color:"white"}}>Husband Name</TableCell>
              <TableCell align="center" sx={{color:"white"}}>Wife Name</TableCell>
              <TableCell align="center" sx={{color:"white"}}>Email</TableCell>
              <TableCell align="center" sx={{color:"white"}}>Mobile No</TableCell>
              <TableCell align="center" sx={{color:"white"}}>Action</TableCell>
              {/* <TableCell sx={{color:"white"}}>Action</TableCell>
              <TableCell sx={{color:"white"}}>Action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow >
                <TableCell align="center">Jhon David</TableCell>
                <TableCell align="center" >Alinafe David</TableCell>
                <TableCell align="center">abc@gmail.com</TableCell>
                <TableCell align="center">422-333-2338</TableCell>
                <TableCell align="center"><Button  variant="contained"
                color="success"
                sx={{marginRight:"10px" }}>Action</Button><Button  variant="contained"
                color="success"
                sx={{marginRight:"10px" }}>View</Button><Button  variant="contained"
                color="success">Download</Button></TableCell>
                
              </TableRow>
          </TableBody>
          <TableBody>
          <TableRow >
                <TableCell align="center">Jhon David</TableCell>
                <TableCell align="center">Alinafe David</TableCell>
                <TableCell align="center" >abc@gmail.com</TableCell>
                <TableCell align="center">422-333-2338</TableCell>
                <TableCell align="center"><Button  variant="contained"
                color="success"
                sx={{marginRight:"10px" }}>Action</Button><Button  variant="contained"
                color="success"
                sx={{marginRight:"10px" }}>View</Button><Button  variant="contained"
                color="success">Download</Button></TableCell>
              </TableRow>
              
          </TableBody>
          <TableBody>
          <TableRow >
                <TableCell align="center">Jhon David</TableCell>
                <TableCell align="center">Alinafe David</TableCell>
                <TableCell align="center">abc@gmail.com</TableCell>
                <TableCell align="center">422-333-2338</TableCell>
                <TableCell align="center"><Button  variant="contained"
                color="success"
                sx={{marginRight:"10px" }}>Action</Button><Button  variant="contained"
                color="success"
                sx={{marginRight:"10px" }}>View</Button><Button  variant="contained"
                color="success">Download</Button></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Dashboard;
