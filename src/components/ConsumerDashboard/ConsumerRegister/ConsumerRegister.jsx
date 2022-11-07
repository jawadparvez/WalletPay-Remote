import React from 'react'
import Navbar from "../Navbar/Navbar"
import { Link, Button } from "@mui/material";
import { FormControl, FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

function ConsumerRegister() {
    let navigate = useNavigate();
    function handleClick() {
      navigate("/ConsumerLogin");
    }
  return (
    <div>
      <Navbar />
      <h6
        style={{
          marginTop: "10%",
          textAlign: "center",
          marginLeft: "20%",
          marginRight: "20%",
          fontSize: "19px",
          fontWeight: "500",
          alignSelf: "stretch",
        }}
      >
        Create account below
      </h6>
      <div style={{ marginRight: "10px", marginLeft: "10px" }}>
        <h5 className="left">First & Last Name</h5>

        <TextField
          fullWidth
          sx={{
            marginRight: "10px",
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
          label="Enter first and last name"
          variant="outlined"
          size="small"
        />
        <h5 className="left">Mobile Number</h5>

        <TextField
          fullWidth
          sx={{
            marginRight: "10px",
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
          label="Enter your phone number"
          variant="outlined"
          size="small"
        />

        <h5 className="left">Password</h5>
        <TextField
          fullWidth
          sx={{
            "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: "#000000",
                border: "1px solid",
                borderRadius: "8px",
                height: "47px",
              },
              "& > placeholder": {
                fontWeight: "900",
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
          label="Enter your password"
          size="small"
          type="password"
          variant="outlined"
          name="password"
        />
        <h5 className="left">Confirm Password</h5>
        <FormControl fullWidth={true}>
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
            label="Confrim password"
            variant="outlined"
            type="password"
            size="small"
          />
          <FormHelperText id="standard-weight-helper-text">
            Passwords must match
          </FormHelperText>
        </FormControl>

        <Button
          fullWidth
          className="signin-button button"
          sx={{
            marginTop: "30px!important",
            color: "white !important",
            backgroundColor: "#0077FF !important",
            borderColor: "black ",
            fontSize: "16px!important",
            fontWeight: "500 !important",
            borderRadius: "8px !important",
            border: "1px solid black !important",
            height: "44px !important",
            fontFamily: "Montserrat !important",
          }}
          variant="contained"
          type="submit"
        >
          Create Account
        </Button>
      </div>
      <Link
        style={{ textDecoration: "none", textAlign: "center" }}
        className="Sign-UpConsumer"
        onClick={handleClick}
      >
        Sign up
      </Link>
    </div>
  );
}

export default ConsumerRegister
