import React from "react";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function ConsumerPassword() {

    const [shower, setShower] = useState(true);
    const [showwer, setShowwer] = useState(false);

    let navigate = useNavigate();
    function handleClick() {
      navigate(-1);
    }

    function onClickShower() {
      setShower(!shower);
      setShowwer(!showwer);
    }
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Link onClick={handleClick}>
            <img
              style={{
                marginTop: "15px",
                marginLeft: "10px",
                AlignItems: "left !important",
                display: "flex",
              }}
              src={BlackArrow}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item xs={10}>
          <h3
            style={{
              color: "#0077FF",
              textAlign: "right",
              marginRight: "20px",
              fontSize: "20px",
              marginTop: "5px",
              fontFamily: "Montserrat !important",
            }}
          >
            Security
          </h3>
        </Grid>
      </Grid>
      <div style={{marginLeft:'20px', marginRight:'20px', marginTop:"40px"}}>
        {shower ? (
          <>
            <Grid container>
              <Grid item xs={8}>
                <p
                  style={{
                    fontSize: "16px",
                    textDecoration: "underline",
                    fontWeight: "600",
                    textAlign: "left",
                    marginLeft: "-10px",
                  }}
                >
                  Current Password
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "10px",
                    marginBottom: "20px",
                    marginLeft: "-10px",
                  }}
                >
                  ***************************
                </p>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  sx={{
                    color: "#0077FF !important",
                    marginLeft: "40px!important",
                    backgroundColor: "white !important",
                    borderRadius: "8px !important",
                    fontWeight: "500 !important",
                    marginTop: "0px !important",
                    border: "1px solid black !important",
                    fontFamily: "Montserrat !important",
                    width: "62px !important",
                    height: "27px !important",
                    textTransform: "capitalize !important",
                  }}
                  variant="contained"
                  onClick={onClickShower}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
          </>
        ) : null}
        {showwer ? (
          <>
            <p
              style={{
                color: "#344054",
                marginTop: "5px",
                textAlign: "left",
                fontSizeL: "13px",
                fontWeight: "600",
              }}
            >
              Current Password
            </p>
            <TextField
              className="input"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "#000000 !important",
                    border: "1px solid black !important ",
                    borderRadius: "8px !important ",
                    height: "47px !important",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#000000",
                    border: "1px solid !important",
                  },
                },
              }}
              label="************************"
              size="small"
              variant="outlined"
            />
            <p
              style={{
                color: "#344054",
                marginTop: "20px",
                textAlign: "left",
                fontSizeL: "13px",
                fontWeight: "600",
              }}
            >
              New Password
            </p>
            <TextField
              className="input"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "#000000 !important",
                    border: "1px solid black !important ",
                    borderRadius: "8px !important ",
                    height: "47px !important",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#000000",
                    border: "1px solid !important",
                  },
                },
              }}
              label="Enter New Password"
              size="small"
              variant="outlined"
            />
            <p
              style={{
                color: "#344054",
                marginTop: "20px",
                textAlign: "left",
                fontSizeL: "13px",
                fontWeight: "600",
              }}
            >
              Confirm Password
            </p>
            <TextField
              className="input"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "#000000 !important",
                    border: "1px solid black !important ",
                    borderRadius: "8px !important ",
                    height: "47px !important",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#000000",
                    border: "1px solid !important",
                  },
                },
              }}
              label="Confirm Password"
              size="small"
              variant="outlined"
            />

            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  sx={{
                    color: "#0077FF !important",
                    marginLeft: "0px!important",
                    backgroundColor: "white !important",
                    borderRadius: "8px !important",
                    fontWeight: "500 !important",
                    marginTop: "30% !important",
                    border: "1px solid black !important",
                    fontFamily: "Montserrat !important",
                    width: "81px !important",
                    height: "40px !important",
                    textTransform: "capitalize !important",
                  }}
                  variant="contained"
                  onClick={onClickShower}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  sx={{
                    color: "white !important",
                    marginLeft: "0px!important",
                    backgroundColor: "#0077FF !important",
                    borderRadius: "8px !important",
                    fontWeight: "500 !important",
                    marginTop: "30% !important",
                    border: "1px solid black !important",
                    fontFamily: "Montserrat !important",
                    width: "66px !important",
                    height: "40px !important",
                    textTransform: "capitalize !important",
                  }}
                  variant="contained"
                  onClick={onClickShower}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ConsumerPassword;
