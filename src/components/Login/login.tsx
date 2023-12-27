import { Typography, Box, TextField, Button } from "@mui/material";
import "./login.scss";
import { useFormik } from "formik";
import { login } from "../Formik/InitalValue";
import { loginSchema } from "../Formik/validationSchema";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserDashboard from "../UserDashboard/UserDashboard";
import { applicationReducer, setLoginDatas } from "../reducer/dashboardReducer";
import Loader from "../Loader";
interface login {
  email: any;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const loginApi = async (payload: any, dispatch: any) => {
    setLoading(true);
    const url = "https://marriage-portal-api.onrender.com/login";

    try {
      const response: any = await axios.post(url, payload);

      if (response && response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const {
    values: valuesForm1,
    touched: touchedForm1,
    errors: errorsForm1,
    handleBlur: handleBlurForm1,
    handleChange: handleChangeForm1,
    handleSubmit: handleSubmitForm1,
  } = useFormik({
    initialValues: login,
    validationSchema: loginSchema,
    onSubmit: (valuesForm1) => {
      const obj = {
        email: valuesForm1?.email,
        password: valuesForm1?.password,
      };

      loginApi(obj, dispatch)
        .then((response) => {
          dispatch(setLoginDatas(response?.data));
          setLoginData(response);
          setLoginData(response.data);
          sessionStorage.setItem("LoginData", JSON.stringify(response?.data));
          localStorage.setItem("email", valuesForm1?.email);
          localStorage.setItem("LoginToken", response.data.loginToken);
          const destination =
            response && response.data.role === "User"
              ? "/UserDashboard"
              : "/dashboard";
          navigate(destination);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <>
      <div>
        <form>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignContent="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography variant="h2" padding={3} textAlign="center">
              Login
            </Typography>
            <TextField
              margin={"normal"}
              type={"email"}
              variant="outlined"
              placeholder="Email"
              name="email"
              value={valuesForm1.email}
              onChange={handleChangeForm1}
              onBlur={handleBlurForm1}
            />
            {errorsForm1.email && touchedForm1.email ? (
              <span style={{ color: "red" }}>{errorsForm1.email}</span>
            ) : null}
            <TextField
              margin={"normal"}
              type={"password"}
              variant="outlined"
              placeholder="Password"
              name="password"
              value={valuesForm1.password}
              onChange={handleChangeForm1}
              onBlur={handleBlurForm1}
            />
            {errorsForm1.password && touchedForm1.password ? (
              <span style={{ color: "red" }}>{errorsForm1.password}</span>
            ) : null}
            <Button
              onClick={() => handleSubmitForm1()}
              sx={{ marginTop: 3, width: 10, alignSelf: "center" }}
              variant="contained"
              color="warning"
            >
              Login
            </Button>
          </Box>
        </form>
      </div>
      <Loader open={loading} />
    </>
  );
};
export default Login;
