import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Logo from "./Logo.png";
import "./header.scss"


const Header = () => {
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
          <Tabs sx={{ marginLeft: "auto" }} textColor="inherit">
            <Tab label="Registration" />
            <Tab label="Login" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
    </div>
    </>
  );
};
export default Header;
