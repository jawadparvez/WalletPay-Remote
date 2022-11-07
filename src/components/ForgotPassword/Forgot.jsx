import React from 'react'
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button, Link } from "@mui/material";
import Arrow from "../../Assets/Images/arrow.png";
import Key from "../../Assets/Images/key.png";
import { useNavigate } from "react-router-dom";

function Forgot() {


  //Navigation
  let navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function handleEmailVerify() {
    navigate("/emailverify");
  }


  //Styling Components
  const StyleButton = {
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
          <img className="mail-icon" src={Key} alt=""></img>
          <h4 className="code-text">Forgot Password?</h4>
          <p className="number-text">
            No Worries, we'll send you reset <br /> instructions
          </p>
          <h5 className="left">Email</h5>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "gray" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            size="small"
          />
        </div>
        <Button
          fullWidth
          className="google-button button"
          sx={StyleButton}
          variant="contained"
          onClick={handleEmailVerify}
        >
          Reset Password
        </Button>
        <div className="mt-40">
          <Link style={{ textDecoration: "none" }} onClick={handleHome}>
            <img className="arrow-icon-verify" src={Arrow} alt=""></img>
            <span className="spacing">Back to log in</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Forgot
