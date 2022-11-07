import React from 'react'
import { Container } from "@mui/system";
import Mail from "../../Assets/Images/mail.png";
import {Link, Button } from "@mui/material";
import Arrow from "../../Assets/Images/arrow.png";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./Email.css"

function Email() {

  //Navigation
  let navigate = useNavigate();
  function handleNewPassword() {
    navigate("/newpassword");
  }
  function handleHome() {
    navigate("/");
  }


  //Styled Component
  const StyleButton = {
    color: "white",
    backgroundColor: "#0077FF",
    borderColor: "black",
    borderRadius: "8px",
    border: "1px solid black",
    height: "44px",
    fontFamily: "Montserrat !important",
  };

  //Return Statement
  return (
    <div>
      <Container maxWidth="xs">
        <div>
          <img className="mail-icon" src={Mail} alt=""></img>
          <h4 className="code-text">Check your email</h4>
          <p className="number-text">
            We sent a password reset link to <br />
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#0077FF",
              }}
            >
              olivia@untitledui.com
            </Link>
          </p>

          <Button
            fullWidth
            className="google-button button"
            sx={StyleButton}
            variant="contained"
            onClick={handleNewPassword}
          >
            Open email app
          </Button>
          <div className="verify-account">
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <p className="textemail-account">Didn't receive the email?</p>
              </Grid>
              <Grid item xs={4}>
                <Link
                  style={{ textDecoration: "none", color: "#0077FF" }}
                  className="resendLink"
                  onClick={handleHome}
                >
                  Click to resend
                </Link>
              </Grid>
            </Grid>
          </div>
          <div className="mt-40">
            <Link style={{ textDecoration: "none" }} onClick={handleHome}>
              <img className="arrow-icon-verify" src={Arrow} alt=""></img>
              <span className="spacing">Back to log in</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Email
