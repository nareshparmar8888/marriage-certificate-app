import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [tabValue, setTabValue] = React.useState<number>(0);

  const handleChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };
  const clearLocalStorage = () => {
    sessionStorage.removeItem("LoginToken");
    sessionStorage.removeItem("email");
  };

  const currentUrl = window.location.href;
  const shouldHideTab = currentUrl.includes("record-download");
  return (
    <>
      <div className="header" style={{ overflow: "hidden", height: "65px" }}>
        <React.Fragment>
          <AppBar sx={{ background: "#063970" }}>
            <Toolbar>
              <Box
                component="img"
                sx={{
                  height: 50,
                }}
                alt="Your logo."
                src={Logo}
              />
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={tabValue}
                onChange={handleChange}
              >
                {!shouldHideTab && <Tab label="Registration" value={0} />}

                {sessionStorage.getItem("LoginToken") &&
                sessionStorage.getItem("email") ? (
                  <Link to="/login">
                    <Tab
                      label="Logout"
                      value={2}
                      style={{ color: "white" }}
                      onClick={clearLocalStorage}
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <Tab label="Login" value={2} style={{ color: "white" }} />
                  </Link>
                )}
              </Tabs>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      </div>
    </>
  );
};
export default Header;
