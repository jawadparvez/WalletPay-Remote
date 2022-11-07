import React from 'react'
import Mail from "../../../Assets/Images/mail.png";
import OTPInput from "otp-input-react";
import { Button, Link } from "@mui/material";
import { useState } from "react";
import "./verification.css";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar'

function ConsumerVerification() {
    const [OTP, setOTP] = useState("");
    let navigate = useNavigate();
    function handleClickk() {
      navigate("/");
    }
    function handleClick() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify([
        {
          otpId: "a8e3ae0d6205e667031442ec5cf6fe53dc55be1d",
          otpText: "3023",
        },
      ]);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:4000/otp", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      navigate("/success");
    }
  return (
    <div>
      <Navbar />
      <Container maxWidth="xs">
        <div>
          <img className="mail-iconConsumer" src={Mail} alt=""></img>
          <h4 className="code-text">Enter Your Code</h4>
          <p style={{marginBottom:'10px'}} className="number-text">
            We sent a verification code to the mobile <br /> number ending is
            ******2782
          </p>
          <div className="center">
            <OTPInput
              value={OTP}
              className="flex"
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
            />
          </div>
          <Button
            fullWidth
            className="verify-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              borderRadius: "8px",
              border: "1px solid black",
              height: "44px",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Verify Mobile
          </Button>
          <div className="mt-40">
            <Link style={{ textDecoration: "none", fontSize:'14px', fontWeight:'500' }} onClick={handleClickk}>
              <span className="spacing">Resend Code</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ConsumerVerification
