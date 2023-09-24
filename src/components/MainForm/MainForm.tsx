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
  Input,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
import { ErrorMessage, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { DatePicker } from "@material-ui/pickers";
import {
  HusbandSchema,
  MerriageSchema,
  PriestSchema,
  WifeSchema,
  Witness1Schema,
  Witness2Schema,
} from "../ValidationSchema/validationSchema";
import {
  HusbandValue,
  MerriageValue,
  PrietsValue,
  WifeValue,
  Witness1Value,
  Witness2Value,
} from "../InitialValue/InitalValue";
import File from "../FileUpload/File";

interface merriage {
  location: string;
  marriageDate: Date | null;
  marriageAddress: string;
}

interface husband {
  surname: string;
  name: string;
  birthDate: Date | null;
  age: Number;
  statusBride: string;
  Religions: string;
  location: string;
  address: string;
}

interface husbandGardian {
  surname: string;
  name: string;
  age: number;
  location: string;
  address: string;
  landline: number;
  mobile: string;
  email: string;
}

interface priest {
  name: string;
  birthDate: Date | null;
  age: number;
  location: string;
  address: string;
}

interface witness {
  name: string;
  birthDate: Date | null;
  age: number;
  address: String;
}

const MainForm = () => {
  const [merriageDetail, setMerriageDetail] = useState<merriage>({
    location: "",
    marriageDate: null,
    marriageAddress: "",
  });

  const [husbandDetail, setHusbandDetail] = useState<husband>({
    surname: "",
    name: "",
    birthDate: null,
    age: 0,
    statusBride: "",
    Religions: "",
    location: "",
    address: "",
  });

  const [husbandGardian, setHusbandGardian] = useState<husbandGardian>({
    surname: "",
    name: "",
    age: 0,
    location: "",
    address: "",
    landline: 0,
    mobile: "",
    email: "",
  });

  const [wifeDetail, setWifeDetail] = useState<husband>({
    surname: "",
    name: "",
    birthDate: null,
    age: 0,
    statusBride: "",
    Religions: "",
    location: "",
    address: "",
  });

  const [wifeGardian, setWifeGardian] = useState<husbandGardian>({
    surname: "",
    name: "",
    age: 0,
    location: "",
    address: "",
    landline: 0,
    mobile: "",
    email: "",
  });

  const [priestDetail, setPriestDetail] = useState<priest>({
    name: "",
    birthDate: null,
    age: 0,
    location: "",
    address: "",
  });

  const [witness1, setWitness1] = useState<witness>({
    name: "",
    birthDate: null,
    age: 0,
    address: "",
  });

  const [witness2, setWitness2] = useState<witness>({
    name: "",
    birthDate: null,
    age: 0,
    address: "",
  });

  const {
    values: valuesForm1,
    touched: touchedForm1,
    errors: errorsForm1,
    handleBlur: handleBlurForm1,
    handleChange: handleChangeForm1,
    handleSubmit: handleSubmitForm1,
  } = useFormik({
    initialValues: MerriageValue,
    validationSchema: MerriageSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  const {
    values: valuesForm2,
    touched: touchedForm2,
    errors: errorsForm2,
    handleBlur: handleBlurForm2,
    handleChange: handleChangeForm2,
    handleSubmit: handleSubmitForm2,
  } = useFormik({
    initialValues: HusbandValue,
    validationSchema: HusbandSchema,
    onSubmit: (values) => {
      console.log("Form 2 submitted with values:", valuesForm2);
    },
  });

  const {
    values: valuesForm3,
    touched: touchedForm3,
    errors: errorsForm3,
    handleBlur: handleBlurForm3,
    handleChange: handleChangeForm3,
    handleSubmit: handleSubmitForm3,
  } = useFormik({
    initialValues: WifeValue,
    validationSchema: WifeSchema,
    onSubmit: (values) => {
      console.log("Form 3 submitted with values:", valuesForm3);
    },
  });

  const {
    values: valuesForm4,
    touched: touchedForm4,
    errors: errorsForm4,
    handleBlur: handleBlurForm4,
    handleChange: handleChangeForm4,
    handleSubmit: handleSubmitForm4,
  } = useFormik({
    initialValues: PrietsValue,
    validationSchema: PriestSchema,
    onSubmit: (values) => {
      console.log("Form 4 submitted with values:", valuesForm4);
    },
  });

  const {
    values: valuesForm5,
    touched: touchedForm5,
    errors: errorsForm5,
    handleBlur: handleBlurForm5,
    handleChange: handleChangeForm5,
    handleSubmit: handleSubmitForm5,
  } = useFormik({
    initialValues: Witness1Value,
    validationSchema: Witness1Schema,
    onSubmit: (values) => {
      console.log("Form 5 submitted with values:", valuesForm5);
    },
  });

  const {
    values: valuesForm6,
    touched: touchedForm6,
    errors: errorsForm6,
    handleBlur: handleBlurForm6,
    handleChange: handleChangeForm6,
    handleSubmit: handleSubmitForm6,
  } = useFormik({
    initialValues: Witness2Value,
    validationSchema: Witness2Schema,
    onSubmit: (values) => {
      console.log("Form 6 submitted with values:", valuesForm6);
    },
  });

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
          id="panel1bh-header"
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
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="applicationDate"
                  value={valuesForm1.applicationDate || ""}
                  onChange={handleChangeForm1}
                  onBlur={handleBlurForm1}
                />
                {errorsForm1.applicationDate && touchedForm1.applicationDate ? (
                  <span style={{ color: "red" }}>
                    {errorsForm1.applicationDate}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="location"
                  value={valuesForm1.location}
                  onChange={handleChangeForm1}
                  onBlur={handleBlurForm1}
                />
                {errorsForm1.location && touchedForm1.location ? (
                  <span style={{ color: "red" }}>{errorsForm1.location}</span>
                ) : null}
              </Grid>

              <Grid item xs={6}>
                <InputLabel>Marriage Date</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="marriageDate"
                  value={valuesForm1.marriageDate || ""}
                  onChange={handleChangeForm1}
                  onBlur={handleBlurForm1}
                />
                {errorsForm1.marriageDate && touchedForm1.marriageDate ? (
                  <span style={{ color: "red" }}>
                    {errorsForm1.marriageDate}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Marriage Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="marriageAddress"
                  value={valuesForm1.marriageAddress}
                  onChange={handleChangeForm1}
                  onBlur={handleBlurForm1}
                />
                {errorsForm1.marriageAddress && touchedForm1.marriageAddress ? (
                  <span style={{ color: "red" }}>
                    {errorsForm1.marriageAddress}
                  </span>
                ) : null}
              </Grid>
              <Button
                onClick={() => handleSubmitForm1()}
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
          id="panel2bh-header"
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
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandsurname"
                  value={valuesForm2.husbandsurname}
                  onChange={handleBlurForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.husbandsurname && touchedForm2.husbandsurname ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.husbandsurname}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandname"
                  value={valuesForm2.husbandname}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.husbandname && touchedForm2.husbandname ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.husbandname}
                  </span>
                ) : null}
              </Grid>

              <Grid item xs={6}>
                <InputLabel>Birth Date</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandbirthdate"
                  value={valuesForm2.husbandbirthdate || ""}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.husbandbirthdate &&
                touchedForm2.husbandbirthdate ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.husbandbirthdate}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandage"
                  value={valuesForm2.husbandage}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.husbandage && touchedForm2.husbandage ? (
                  <span style={{ color: "red" }}>{errorsForm2.husbandage}</span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Status of Bridegroom at the time</InputLabel>
                <Select
                  label="Age"
                  sx={{ width: "100%" }}
                  name="husbandstatus"
                  value={valuesForm2.husbandstatus}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Married</MenuItem>
                  <MenuItem value={21}>UnMarried</MenuItem>
                  <MenuItem value={22}>Divorced</MenuItem>
                  <MenuItem value={22}>Widower/Widow</MenuItem>
                </Select>
                {errorsForm2.husbandstatus && touchedForm2.husbandstatus ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.husbandstatus}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Religious</InputLabel>
                <Select
                  label="Age"
                  sx={{ width: "100%" }}
                  name="husbandreligions"
                  value={valuesForm2.husbandreligions || ""}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Hindu</MenuItem>
                  <MenuItem value={21}>Jain</MenuItem>
                  <MenuItem value={22}>Buddhist</MenuItem>
                  <MenuItem value={10}>Sikh</MenuItem>
                  <MenuItem value={21}>Christian</MenuItem>
                  <MenuItem value={22}>Parsi</MenuItem>
                  <MenuItem value={10}>Jewish</MenuItem>
                  <MenuItem value={21}>Muslim</MenuItem>
                  <MenuItem value={22}>Other</MenuItem>
                  <MenuItem value={10}>No Religion</MenuItem>
                  <MenuItem value={21}>Spiritual-not religious</MenuItem>
                </Select>
                {errorsForm2.husbandreligions &&
                touchedForm2.husbandreligions ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.husbandreligions}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandlocation"
                  value={valuesForm2.husbandlocation}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.husbandlocation && touchedForm2.husbandlocation ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.husbandlocation}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandaddress"
                  value={valuesForm2.husbandaddress}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.husbandaddress && touchedForm2.husbandaddress ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.husbandaddress}
                  </span>
                ) : null}
              </Grid>

              <Grid item xs={6}>
                <h3>Guardian/Mother/Father</h3>
                <InputLabel>Surname</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianSurname"
                  value={valuesForm2.gardianSurname || ""}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianSurname && touchedForm2.gardianSurname ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.gardianSurname}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6} sx={{ width: "100%", mt: "60px" }}>
                <InputLabel>Name</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianName"
                  value={valuesForm2.gardianName || ""}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianName && touchedForm2.gardianName ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.gardianName}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianAge"
                  value={valuesForm2.gardianAge}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianAge && touchedForm2.gardianAge ? (
                  <span style={{ color: "red" }}>{errorsForm2.gardianAge}</span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianLocation"
                  value={valuesForm2.gardianLocation || ""}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianLocation && touchedForm2.gardianLocation ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.gardianLocation}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianAddress"
                  value={valuesForm2.gardianAddress || ""}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianAddress && touchedForm2.gardianAddress ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.gardianAddress}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Contact(Landline)</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianContact"
                  value={valuesForm2.gardianContact}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianContact && touchedForm2.gardianContact ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.gardianContact}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Mobile</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianMobile"
                  value={valuesForm2.gardianMobile}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianMobile && touchedForm2.gardianMobile ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.gardianMobile}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Email</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianEmail"
                  value={valuesForm2.gardianEmail || ""}
                  onChange={handleChangeForm2}
                  onBlur={handleBlurForm2}
                />
                {errorsForm2.gardianEmail && touchedForm2.gardianEmail ? (
                  <span style={{ color: "red" }}>
                    {errorsForm2.gardianEmail}
                  </span>
                ) : null}
              </Grid>
              <Button
                onClick={() => handleSubmitForm2()}
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
          id="panel3bh-header"
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
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandsurname"
                  value={valuesForm3.wifesurname}
                  onChange={handleBlurForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.wifesurname && touchedForm3.wifesurname ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.wifesurname}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandname"
                  value={valuesForm3.wifename}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.wifename && touchedForm3.wifename ? (
                  <span style={{ color: "red" }}>{errorsForm3.wifename}</span>
                ) : null}
              </Grid>

              <Grid item xs={6}>
                <InputLabel>Birth Date</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandbirthdate"
                  value={valuesForm3.wifebirthdate || ""}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.wifebirthdate && touchedForm3.wifebirthdate ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.wifebirthdate}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandage"
                  value={valuesForm3.wifeage}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.wifeage && touchedForm3.wifeage ? (
                  <span style={{ color: "red" }}>{errorsForm3.wifeage}</span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Status of Bridegroom at the time</InputLabel>
                <Select
                  label="Age"
                  sx={{ width: "100%" }}
                  name="husbandstatus"
                  value={valuesForm3.wifestatus}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Married</MenuItem>
                  <MenuItem value={21}>UnMarried</MenuItem>
                  <MenuItem value={22}>Divorced</MenuItem>
                  <MenuItem value={22}>Widower/Widow</MenuItem>
                </Select>
                {errorsForm3.wifestatus && touchedForm3.wifestatus ? (
                  <span style={{ color: "red" }}>{errorsForm3.wifestatus}</span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                {/* <Typography >Merrage Certificate details</Typography> */}
                <InputLabel>Religious</InputLabel>
                <Select
                  label="Age"
                  sx={{ width: "100%" }}
                  name="husbandreligions"
                  value={valuesForm3.wifereligions}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Hindu</MenuItem>
                  <MenuItem value={21}>Jain</MenuItem>
                  <MenuItem value={22}>Buddhist</MenuItem>
                  <MenuItem value={10}>Sikh</MenuItem>
                  <MenuItem value={21}>Christian</MenuItem>
                  <MenuItem value={22}>Parsi</MenuItem>
                  <MenuItem value={10}>Jewish</MenuItem>
                  <MenuItem value={21}>Muslim</MenuItem>
                  <MenuItem value={22}>Other</MenuItem>
                  <MenuItem value={10}>No Religion</MenuItem>
                  <MenuItem value={21}>Spiritual-not religious</MenuItem>
                </Select>
                {errorsForm3.wifereligions && touchedForm3.wifereligions ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.wifereligions}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandlocation"
                  value={valuesForm3.wifelocation}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.wifelocation && touchedForm3.wifelocation ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.wifelocation}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="husbandaddress"
                  value={valuesForm3.wifeaddress}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.wifeaddress && touchedForm3.wifeaddress ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.wifeaddress}
                  </span>
                ) : null}
              </Grid>

              <Grid item xs={6}>
                <h3>Guardian/Mother/Father</h3>
                <InputLabel>Surname</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianSurname"
                  value={valuesForm3.gardianwifeSurname}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeSurname &&
                touchedForm3.gardianwifeSurname ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeSurname}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6} sx={{ width: "100%", mt: "60px" }}>
                <InputLabel>Name</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianName"
                  value={valuesForm3.gardianwifeName}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeName && touchedForm3.gardianwifeName ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeName}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianAge"
                  value={valuesForm3.gardianwifeAge}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeAge && touchedForm3.gardianwifeAge ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeAge}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Location</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianLocation"
                  value={valuesForm3.gardianwifeLocation}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeLocation &&
                touchedForm3.gardianwifeLocation ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeLocation}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianAddress"
                  value={valuesForm3.gardianwifeAddress}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeAddress &&
                touchedForm3.gardianwifeAddress ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeAddress}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Contact(Landline)</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianContact"
                  value={valuesForm3.gardianwifeContact}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeContact &&
                touchedForm3.gardianwifeContact ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeContact}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Mobile</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianMobile"
                  value={valuesForm3.gardianwifeMobile}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeMobile &&
                touchedForm3.gardianwifeMobile ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeMobile}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Email</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="gardianEmail"
                  value={valuesForm3.gardianwifeEmail}
                  onChange={handleChangeForm3}
                  onBlur={handleBlurForm3}
                />
                {errorsForm3.gardianwifeEmail &&
                touchedForm3.gardianwifeEmail ? (
                  <span style={{ color: "red" }}>
                    {errorsForm3.gardianwifeEmail}
                  </span>
                ) : null}
              </Grid>
              <Button
                onClick={() => handleSubmitForm3()}
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
          id="panel4bh-header"
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
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="priestname"
                  value={valuesForm4.priestname}
                  onChange={handleChangeForm4}
                  onBlur={handleBlurForm4}
                />
                {errorsForm4.priestname && touchedForm4.priestname ? (
                  <span style={{ color: "red" }}>{errorsForm4.priestname}</span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Date of Birth</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="priestbirthdate"
                  value={valuesForm4.priestbirthdate}
                  onChange={handleChangeForm4}
                  onBlur={handleBlurForm4}
                />
                {errorsForm4.priestbirthdate && touchedForm4.priestbirthdate ? (
                  <span style={{ color: "red" }}>
                    {errorsForm4.priestbirthdate}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="priestage"
                  value={valuesForm4.priestage}
                  onChange={handleChangeForm4}
                  onBlur={handleBlurForm4}
                />
                {errorsForm4.priestage && touchedForm4.priestage ? (
                  <span style={{ color: "red" }}>{errorsForm4.priestage}</span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Priest Location</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="priestlocation"
                  value={valuesForm4.priestlocation}
                  onChange={handleChangeForm4}
                  onBlur={handleBlurForm4}
                />
                {errorsForm4.priestlocation && touchedForm4.priestlocation ? (
                  <span style={{ color: "red" }}>
                    {errorsForm4.priestlocation}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="prietsaddress"
                  value={valuesForm4.prietsaddress}
                  onChange={handleChangeForm4}
                  onBlur={handleBlurForm4}
                />
                {errorsForm4.prietsaddress && touchedForm4.prietsaddress ? (
                  <span style={{ color: "red" }}>
                    {errorsForm4.prietsaddress}
                  </span>
                ) : null}
              </Grid>
              <Button
                onClick={() => handleSubmitForm4()}
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
          id="panel5bh-header"
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
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness1detail"
                  value={valuesForm5.witness1detail}
                  onChange={handleChangeForm5}
                  onBlur={handleBlurForm5}
                />
                {errorsForm5.witness1detail && touchedForm5.witness1detail ? (
                  <span style={{ color: "red" }}>
                    {errorsForm5.witness1detail}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Date of Birth</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness1birthdate"
                  value={valuesForm5.witness1birthdate}
                  onChange={handleChangeForm5}
                  onBlur={handleBlurForm5}
                />
                {errorsForm5.witness1birthdate &&
                touchedForm5.witness1birthdate ? (
                  <span style={{ color: "red" }}>
                    {errorsForm5.witness1birthdate}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness1age"
                  value={valuesForm5.witness1age}
                  onChange={handleChangeForm5}
                  onBlur={handleBlurForm5}
                />
                {errorsForm5.witness1age && touchedForm5.witness1age ? (
                  <span style={{ color: "red" }}>
                    {errorsForm5.witness1age}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness1address"
                  value={valuesForm5.witness1address}
                  onChange={handleChangeForm5}
                  onBlur={handleBlurForm5}
                />
                {errorsForm5.witness1address && touchedForm5.witness1address ? (
                  <span style={{ color: "red" }}>
                    {errorsForm5.witness1address}
                  </span>
                ) : null}
              </Grid>
              <Button
                onClick={() => handleSubmitForm5()}
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
          id="panel6bh-header"
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
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness2name"
                  value={valuesForm6.witness2name}
                  onChange={handleChangeForm6}
                  onBlur={handleBlurForm6}
                />
                {errorsForm6.witness2name && touchedForm6.witness2name ? (
                  <span style={{ color: "red" }}>
                    {errorsForm6.witness2name}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Date of Birth</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness2birthdate"
                  value={valuesForm6.witness2birthdate}
                  onChange={handleChangeForm6}
                  onBlur={handleBlurForm6}
                />
                {errorsForm6.witness2birthdate &&
                touchedForm6.witness2birthdate ? (
                  <span style={{ color: "red" }}>
                    {errorsForm6.witness2birthdate}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Age</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness2age"
                  value={valuesForm6.witness2age}
                  onChange={handleChangeForm6}
                  onBlur={handleBlurForm6}
                />
                {errorsForm6.witness2age && touchedForm6.witness2age ? (
                  <span style={{ color: "red" }}>
                    {errorsForm6.witness2age}
                  </span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Address</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="witness2address"
                  value={valuesForm6.witness2address}
                  onChange={handleChangeForm6}
                  onBlur={handleBlurForm6}
                />
                {errorsForm6.witness2address && touchedForm6.witness2address ? (
                  <span style={{ color: "red" }}>
                    {errorsForm6.witness2address}
                  </span>
                ) : null}
              </Grid>
              <Button
                onClick={() => handleSubmitForm6()}
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
          id="panel7bh-header"
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "gray",
          }}
        >
          Attachment Document
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Grid container>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      label="Husband School Leaving Certificate/ Birth Proof"
                      control={<File />}
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      label="Wife School Leaving Certificate/ Birth Proof"
                      control={<File />}
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      label="Witness-1 photo ID Proof"
                      control={<File />}
                    />
                  </FormGroup>
                </Grid>

                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      label="200+200 Agreement Stamp"
                      control={<File />}
                    />
                  </FormGroup>
                </Grid>
              </div>
            </Grid>
            <div>
              <Grid item>
                <FormGroup>
                  <FormControlLabel
                    label="Husband photo ID Proof"
                    control={<File />}
                  />
                </FormGroup>
              </Grid>

              <Grid item>
                <FormGroup>
                  <FormControlLabel
                    label="Wife Photo ID Proof"
                    control={<File />}
                  />
                </FormGroup>
              </Grid>

              <Grid item>
                <FormGroup>
                  <FormControlLabel
                    label="Priest photo ID Proof"
                    control={<File />}
                  />
                </FormGroup>
              </Grid>
              <Grid item>
                <FormGroup>
                  <FormControlLabel
                    label="Marriage Evidence"
                    control={<File />}
                  />
                </FormGroup>
              </Grid>
            </div>
            <div>
              <Button
                variant="contained"
                color="success"
                sx={{ m: "20px", width: "7%" }}
              >
                Save
              </Button>
            </div>
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
