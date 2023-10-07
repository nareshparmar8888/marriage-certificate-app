import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Logo from "./Logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [tabValue, setTabValue] = React.useState<number>(0);

  const handleChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };
  return (
    <>
      <div className="header">
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
                <Tab label="Registration" value={0} />

                <Link to="/login">
                  <Tab label="Login" value={2} />
                </Link>
              </Tabs>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      </div>
    </>
  );
};
export default Header;
