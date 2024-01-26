import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import "./Loader.scss";

export default function Loader(props: any) {
  const { open, handleClose } = props;

  return (
    <div>
      <Backdrop
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <span className="loader"></span>
      </Backdrop>
    </div>
  );
}
