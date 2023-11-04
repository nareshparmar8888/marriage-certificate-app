import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./MainForm.scss";
import {
  Grid,
  TextField,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/footer";
import { useFormik } from "formik";
import File from "../FileUpload/File";

import {
  HusbandSchema,
  MerriageSchema,
  PriestSchema,
  WifeSchema,
  Witness1Schema,
  Witness2Schema,
} from "../Formik/validationSchema";

import {
  HusbandValue,
  MerriageValue,
  PrietsValue,
  WifeValue,
  Witness1Value,
  Witness2Value,
} from "../Formik/InitalValue";
import Preview from "./Preview";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

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
  const [document, setDocument] = useState([
    {
      id: 0,
      title: "Husband School Leaving Certificate/ Birth Proof",
      image: "",
      error: "",
    },
    {
      id: 1,
      title: "Wife School Leaving Certificate/ Birth Proof",
      image: "",
      error: "",
    },
    {
      id: 2,
      title: "Witness-1 photo ID Proof",
      image: "",
      error: "",
    },
    {
      id: 3,
      title: "Witness-2 photo ID Proof",
      image: "",
      error: "",
    },
    {
      id: 4,
      title: "200+200 Agreement Stamp",
      image: "",
      error: "",
    },
    {
      id: 5,
      title: "Husband photo ID Proof",
      image: "",
      error: "",
    },
    {
      id: 6,
      title: "Wife photo ID Proof",
      image: "",
      error: "",
    },
    {
      id: 7,
      title: "Priest photo ID Proof",
      image: "",
      error: "",
    },
    {
      id: 8,
      title: "Marriage Evidence",
      image: "",
      error: "",
    },
  ]);

  const classes = useStyles();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

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
    onSubmit: (valuesForm1) => {
      setMerriageDetail((prevState: any) => ({
        ...prevState,
        location: valuesForm1?.location,
        marriageDate: valuesForm1?.marriageDate,
        marriageAddress: valuesForm1?.marriageAddress,
      }));
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
    onSubmit: (valuesForm2) => {
      setHusbandDetail((prevState: any) => ({
        ...prevState,
        surname: valuesForm2?.husbandsurname,
        name: valuesForm2?.husbandname,
        birthDate: valuesForm2?.husbandbirthdate,
        age: valuesForm2?.husbandage,
        statusBride: valuesForm2?.husbandstatus,
        Religions: valuesForm2?.husbandreligions,
        location: valuesForm2?.husbandlocation,
        address: valuesForm2?.husbandaddress,
      }));
      setHusbandGardian((prevState: any) => ({
        ...prevState,
        surname: valuesForm2?.gardianSurname,
        name: valuesForm2?.gardianName,
        age: valuesForm2?.gardianAge,
        location: valuesForm2?.gardianLocation,
        address: valuesForm2?.gardianAddress,
        landline: valuesForm2?.gardianContact,
        mobile: valuesForm2?.gardianMobile,
        email: valuesForm2?.gardianEmail,
      }));
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
    onSubmit: (valuesForm3) => {
      setWifeDetail((prevState: any) => ({
        ...prevState,
        surname: valuesForm3?.wifesurname,
        name: valuesForm3?.wifename,
        birthDate: valuesForm3?.wifebirthdate,
        age: valuesForm3?.wifeage,
        statusBride: valuesForm3?.wifestatus,
        Religions: valuesForm3?.wifereligions,
        location: valuesForm3?.wifelocation,
        address: valuesForm3?.wifeaddress,
      }));
      setWifeGardian((prevState: any) => ({
        ...prevState,
        surname: valuesForm3?.gardianwifeSurname,
        name: valuesForm3?.gardianwifeName,
        age: valuesForm3?.gardianwifeAge,
        location: valuesForm3?.gardianwifeLocation,
        address: valuesForm3?.gardianwifeAddress,
        landline: valuesForm3?.gardianwifeContact,
        mobile: valuesForm3?.gardianwifeMobile,
        email: valuesForm3?.gardianwifeEmail,
      }));
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
    onSubmit: (valuesForm4) => {
      setPriestDetail((prevState: any) => ({
        ...prevState,
        name: valuesForm4?.priestname,
        birthDate: valuesForm4?.priestbirthdate,
        age: valuesForm4?.priestage,
        location: valuesForm4?.priestlocation,
        address: valuesForm4?.prietsaddress,
      }));
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
    onSubmit: (valuesForm5) => {
      setWitness1((prevState: any) => ({
        ...prevState,
        name: valuesForm5?.witness1detail,
        birthDate: valuesForm5?.witness1birthdate,
        age: valuesForm5?.witness1age,
        address: valuesForm5?.witness1address,
      }));
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
      setWitness2((prevState: any) => ({
        ...prevState,
        name: valuesForm6?.witness2name,
        birthDate: valuesForm6?.witness2birthdate,
        age: valuesForm6?.witness2age,
        address: valuesForm6?.witness2address,
      }));
    },
  });

  const handleSubmit = () => {
    const updatedDocument = [...document]; 
    for (let i = 0; i < updatedDocument.length; i++) {
      if (updatedDocument[i].image === "") {
        updatedDocument[i].error = "Please select this image";
      } else {
        updatedDocument[i].error = ""; 
      }
    }

   
    setDocument(updatedDocument);
  };

  const handleChange = (image: any, index: number) => {
    const data = [...document];
    data[index].image = image;
    setDocument(data);
  };

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
      <Box sx={{ boxShadow: 3 }}>
        <Accordion>
          <AccordionSummary
            id="panel1bh-header"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "white",
              boxShadow: 20,
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
                    
                    defaultValue={currentDate}
                    disabled
                  />
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
                  type="date"
                  InputProps={{
                    inputProps: {
                      min: "1956-01-01",
                      max: currentDate
                    }
                  }}                    variant="outlined"
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
                  {errorsForm1.marriageAddress &&
                  touchedForm1.marriageAddress ? (
                    <span style={{ color: "red" }}>
                      {errorsForm1.marriageAddress}
                    </span>
                  ) : (
                    ""
                  )}
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
      </Box>

      <Box sx={{ boxShadow: 3 }}>
        <Accordion>
          <AccordionSummary
            id="panel2bh-header"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "white",
              boxShadow: 20,
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
                    onChange={handleChangeForm2}
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
                  type="date"
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
                    <span style={{ color: "red" }}>
                      {errorsForm2.husbandage}
                    </span>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
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
                  {errorsForm2.husbandlocation &&
                  touchedForm2.husbandlocation ? (
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
                    <span style={{ color: "red" }}>
                      {errorsForm2.gardianAge}
                    </span>
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
                  {errorsForm2.gardianLocation &&
                  touchedForm2.gardianLocation ? (
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
      </Box>

      <Box sx={{ boxShadow: 3 }}>
        <Accordion>
          <AccordionSummary
            id="panel3bh-header"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "white",
              boxShadow: 20,
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
                    name="wifesurname"
                    value={valuesForm3.wifesurname}
                    onChange={handleChangeForm3}
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
                    name="wifename"
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
                   type="date"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    name="wifebirthdate"
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
                    name="wifeage"
                    value={valuesForm3.wifeage}
                    onChange={handleChangeForm3}
                    onBlur={handleBlurForm3}
                  />
                  {errorsForm3.wifeage && touchedForm3.wifeage ? (
                    <span style={{ color: "red" }}>{errorsForm3.wifeage}</span>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Status of Bridegroom at the time</InputLabel>
                  <Select
                    label="Age"
                    sx={{ width: "100%" }}
                    name="wifestatus"
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
                    <span style={{ color: "red" }}>
                      {errorsForm3.wifestatus}
                    </span>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Religious</InputLabel>
                  <Select
                    label="Age"
                    sx={{ width: "100%" }}
                    name="wifereligions"
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
                    name="wifelocation"
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
                    name="wifeaddress"
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
                    name="gardianwifeSurname"
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
                    name="gardianwifeName"
                    value={valuesForm3.gardianwifeName}
                    onChange={handleChangeForm3}
                    onBlur={handleBlurForm3}
                  />
                  {errorsForm3.gardianwifeName &&
                  touchedForm3.gardianwifeName ? (
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
                    name="gardianwifeAge"
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
                    name="gardianwifeLocation"
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
                    name="gardianwifeAddress"
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
                    name="gardianwifeContact"
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
                    name="gardianwifeMobile"
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
                    name="gardianwifeEmail"
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
      </Box>

      <Box sx={{ boxShadow: 3 }}>
        <Accordion>
          <AccordionSummary
            id="panel4bh-header"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "white",
              boxShadow: 20,
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
                    <span style={{ color: "red" }}>
                      {errorsForm4.priestname}
                    </span>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Date of Birth</InputLabel>
                  <TextField
                  type="date"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    name="priestbirthdate"
                    value={valuesForm4.priestbirthdate}
                    onChange={handleChangeForm4}
                    onBlur={handleBlurForm4}
                  />
                  {errorsForm4.priestbirthdate &&
                  touchedForm4.priestbirthdate ? (
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
                    <span style={{ color: "red" }}>
                      {errorsForm4.priestage}
                    </span>
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
      </Box>

      <Box sx={{ boxShadow: 3 }}>
        <Accordion>
          <AccordionSummary
            id="panel5bh-header"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "white",
              boxShadow: 20,
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
                  type="date"
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
                  {errorsForm5.witness1address &&
                  touchedForm5.witness1address ? (
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
      </Box>
      <Box sx={{ boxShadow: 3 }}>
        <Accordion>
          <AccordionSummary
            id="panel6bh-header"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "white",
              boxShadow: 20,
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
                  type="date"
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
                  {errorsForm6.witness2address &&
                  touchedForm6.witness2address ? (
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
      </Box>
      <Box sx={{ boxShadow: 3 }}>
        <Accordion>
          <AccordionSummary
            id="panel7bh-header"
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "white",
              boxShadow: 20,
            }}
          >
            Attachment Document
          </AccordionSummary>
          <center>
            <AccordionDetails>
              <div className="row">
                {document.map((data, index) => (
                  <div className="col-md-4" key={index}>
                    <Preview {...data} onChange={handleChange} />
                    <span style={{ color: "red" }}>{data.error}</span>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </center>
          <Box textAlign="center">
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              sx={{ width: "10%", height: "50px", mt: "20px", mb: "20px" }}
            >
              Submit
            </Button>
          </Box>
        </Accordion>
      </Box>

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
