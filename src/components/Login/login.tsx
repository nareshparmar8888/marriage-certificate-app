import { Typography, Box, TextField, Button } from "@mui/material";
import "./login.scss"

const Login = () => {
  return (
    <>
      <div >
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
            <Typography variant="h2" padding={3} textAlign="center" >
              Login
            </Typography>
            <TextField
              margin={"normal"}
              type={"email"}
              variant="outlined"
              placeholder="Email"
              
            />
            <TextField
              margin={"normal"}
              type={"password"}
              variant="outlined"
              placeholder="Password"
            />
            <Button
              sx={{ marginTop: 3, width: 10, alignSelf: "center" }}
              variant="contained"
              color="warning"
            >
              Login
            </Button>
          </Box>
        </form>
        
      </div>
    </>
  );
};
export default Login;
