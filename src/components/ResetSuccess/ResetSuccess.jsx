import React from 'react'
import { Container } from "@mui/system";
import Arrow from "../../Assets/Images/arrow.png";
import Check from "../../Assets/Images/check.png";
import {Link } from "@mui/material";
import './resetsuccess.css';
import { useNavigate } from "react-router-dom";

function ResetSuccess() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div>
          <img className="mail-icon" src={Check} alt=""></img>
          <h4 className="code-text">Password reset</h4>
          <p className="number-text">
            Your password has been successfully reset! <br /> Click below to
            return to log in screen
          </p>
          <div className="mt-40">
            <Link style={{ textDecoration: "none" }} onClick={handleClick}>
              <img className="arrow-icon-verify" src={Arrow} alt=""></img>
              <span className="spacing">Back to log in</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ResetSuccess
