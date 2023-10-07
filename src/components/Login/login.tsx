import { Typography, Box, TextField, Button } from "@mui/material";
import "./login.scss";
import { useFormik } from "formik";
import { login } from "../InitialValue/InitalValue";
import { loginSchema } from "../ValidationSchema/validationSchema";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginApi } from "../ApiAction/AllApi";
interface login {
  email: any;
  password: string;
}
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: null,
  });

  const dispatch = useDispatch();

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
      setLoginForm((prevState: any) => ({
        ...prevState,
        location: valuesForm1?.email,
        marriageDate: valuesForm1?.password,
      }));
      console.log(loginForm);
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(loginApi());
        console.log("respo", response);
      } catch (error) {
        console.error("Error:", error);
        // dispatch(loginError(error));
      }
    };

    fetchData();
  }, [dispatch]);

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
            <Link to="/UserDashboard">
              <Button
                onClick={() => handleSubmitForm1()}
                sx={{ marginTop: 3, width: 10, alignSelf: "center" }}
                variant="contained"
                color="warning"
              >
                Login
              </Button>
            </Link>
          </Box>
        </form>
      </div>
    </>
  );
};
export default Login;
