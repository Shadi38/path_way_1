import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import RegisterForm from "./RegisterForm";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function MorningEveningWindow(props) {
  const [open, setOpen] = React.useState(false);
  const [showRegisterForm, setShowRegisterForm] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ color: "#FC4445", backgroundColor: "white", marginLeft: 130 }}
        onClick={handleClickOpen}
      >
        Book session
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
          We are happy to have you as a volunteer
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent  dividers>
          <Typography gutterBottom>
            Morning  and Evening sessions are available
          </Typography>
        </DialogContent>
        <DialogActions>
          {showRegisterForm ? (
            <RegisterForm />
          ) : (
            <Button autoFocus onClick={handleRegisterClick}>
              Register
            </Button>
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
