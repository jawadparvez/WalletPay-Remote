import React from 'react'
import Tick from "../../Assets/Images/tick.png"
import { Container } from "@mui/system";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./success.css"
function Success() {

  //Navigation
  let navigate = useNavigate();
  function handleClick() {
    navigate("/forgotpassword");
  }


  //Styling Component
  const StlyeButton = {
    color: "white",
    backgroundColor: "#0077FF",
    borderColor: "black",
    borderRadius: "8px",
    border: "1px solid black",
    height: "44px",
    fontFamily: "Montserrat !important",
  };


  //return Statement
  return (
    <div>
      <Container maxWidth="xs">
        <div>
          <img className="mail-icon" src={Tick} alt=""></img>
          <h4 className="code-text">Phone Verified</h4>
          <p className="success-text">
            Your mobile phone has been successfully <br /> veirfied. Click below
            to login
          </p>
          <Button
            fullWidth
            className="verify-button button"
            sx={StlyeButton}
            variant="contained"
            onClick={handleClick}
          >
            Sign In
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Success
