import React from 'react'
import Navbar from "../Navbar/Navbar"
import { Checkbox, Link, Button } from "@mui/material";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import './login.css'


function ConsumerLogin() {
      let navigate = useNavigate();
      function handleClick() {
        navigate("/ConsumerRegister");
      }

      function handleClickProfile(){
        navigate("/ConsumerProfile");
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
        Sign-in or create your WalletPay account for a better experience.
      </h6>
      <div style={{ marginRight: "10px", marginLeft: "10px" }}>
        <h5 className="left">Email</h5>

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
          label="Enter your Email"
          variant="outlined"
          type="password"
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

        <Grid container spacing={0}>
          <Grid className="checkbox" item xs={1}>
            <Checkbox
              sx={{
                color: "#D0D5DD",
                marginLeft: "0px",
                position: "relative",
                left: "-10px",
                "&.Mui-checked": {
                  color: "#0077FF",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <p className="p-css">Remember for 30 days</p>
          </Grid>
          <Grid item xs={5}>
            <div className="float">
              <Link
                //   onClick={handleClickk}
                style={{
                  textDecoration: "none",
                  color: "#0077FF",
                  lineHeight: "20px",
                }}
              >
                Forgot password
              </Link>
            </div>
          </Grid>
        </Grid>

        <Button
          fullWidth
          className="signin-button button"
          sx={{
            marginTop: "40px!important",
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
          onClick={handleClickProfile}
        >
          Sign In
        </Button>
      </div>

      <Link
        style={{ textDecoration: "none", textAlign: "center" }}
        className="Sign-InConsumer"
        onClick={handleClick}
      >
        Create WalletPay account
      </Link>
    </div>
  );
}

export default ConsumerLogin
