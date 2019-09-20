import React from "react";
import clsx from "clsx";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { withRouter } from "react-router-dom";
import brandLogo from "../../../assets/imgs/MPF_logo.png";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { navBarStyles } from "./NavBarStyles";
import axios from "axios";
import ProgressBar from "../../ui/progressbar/ProgressBar";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


const TopAppBar = props => {
  const [completed, setCompleted] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [msg, setMsg] = React.useState("PREPARING PDF");

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  const handleRoute = () => {
    setAnchorEl(null);
    props.history.push("/main/pdfview");
  };

  const downloadPdf = () => {
    setAnchorEl(null);
    const id = "5d825a809926cb372cedcfd6";
    setOpen(true);
    axios({
      url: `http://15.206.16.194:3000/v2/api/psg/generate/${id}/pdf`,
      method: "GET",
      responseType: "blob",
      onDownloadProgress: progressEvent => {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        if (percentCompleted) {
          if (percentCompleted <= 35) {
            setMsg("PACKAGING PDF FOR DOWNLOAD");
          } else if (percentCompleted === 100) {
            setMsg("");
            setCompleted(0);
            setOpen(false);
          } else {
            setMsg("DOWNLOADING..");
            setCompleted(percentCompleted);
          }
        }
      } // important
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "PSG.pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
        console.log("File Downloaded");
      })
      .catch(error => {
        console.log("Something went to wrong");
      });
  };

  const classes = navBarStyles();
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, props.open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            props.open && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        {props.isNavOpen && (
          <img src={brandLogo} alt="logo" className={classes.logo} />
        )}
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {props.title}
        </Typography>
        <Hidden xsDown>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={handleRoute}
            className={classes.button}
          >
            PSG Viewer
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            onClick={downloadPdf}
            className={classes.button}
          >
            Download PDF
          </Button>
        </Hidden>
        <Hidden smUp>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableBackdropClick={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={classes.paper}>
          <h2 id="spring-modal-title">{msg}</h2>
          <ProgressBar value={completed} />
        </div>
      </Modal>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleRoute}>PSG Viewer</MenuItem>
        <MenuItem onClick={downloadPdf}> Download PDF</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default withRouter(TopAppBar);
