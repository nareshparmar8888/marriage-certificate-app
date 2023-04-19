import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/footer";

const MainForm = () => {
  return (
    <>
      <Header />
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            bgcolor: "background.paper",
            m: "10px",
            p: "10px",
          }}
        >
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Merriage Details
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel>Application Date</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <InputLabel>Marriage Date</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Marriage Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </Grid>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Husband Details
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel>Surname</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <InputLabel>Birth Date</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Status of Bridegroom at the time</InputLabel>
                <Select label="Age" sx={{ width: "100%" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Religious</InputLabel>
                <Select label="Age" sx={{ width: "100%" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <h3>Guardian/Mother/Father</h3>
                <InputLabel>Surname</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6} sx={{ width: "100%", mt: "60px" }}>
                <InputLabel>Name</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Contact(Landline)</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Mobile</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Email</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </Grid>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Wife Details
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel>Surname</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <InputLabel>Birth Date</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Status of Bridegroom at the time</InputLabel>
                <Select label="Age" sx={{ width: "100%" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Religious</InputLabel>
                <Select label="Age" sx={{ width: "100%" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <h3>Guardian/Mother/Father</h3>
                <InputLabel>Surname</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6} sx={{ width: "100%", mt: "60px" }}>
                <InputLabel>Name</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Contact(Landline)</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Mobile</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Email</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </Grid>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Priest Details
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Date of Birth</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Priest Location</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </Grid>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Witness-1 Details
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Date of Birth</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </Grid>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Witness-2 Details
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Date of Birth</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField variant="outlined" sx={{ width: "100%" }} />
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </Grid>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Attachment Document
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Husband School Leaving Certificate/ Birth Proof"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wife School Leaving Certificate/ Birth Proof"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Witness photo ID Proof"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="200+200 Agreement Stamp"
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Husband photo ID Proof"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wife Photo ID Proof"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Priest photo ID Proof"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Marriage Evidence"
                  />
                </FormGroup>
              </Grid>

              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </Grid>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{ width: "30%", height: "70px", mt: "150px" }}
        >
          Apply for marriage Registration
        </Button>
      </Box>
      <Footer />
    </>
  );
};
export default MainForm;
