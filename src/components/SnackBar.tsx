import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { SnackbarOrigin } from "@material-ui/core/Snackbar";

interface SnackbarProps {
  message: string;
}

export default function SnackBar({ message }: SnackbarProps) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    console.log("Closing Snackbar");
    setOpen(false);
  };

  console.log("Snackbar state - open:", open);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" } as SnackbarOrigin}
      open={open}
      onClose={handleClose}
      message={message}
    />
  );
}
