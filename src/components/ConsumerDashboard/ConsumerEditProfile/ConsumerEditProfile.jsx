import React from 'react'
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar'

function ConsumerEditProfile() {
    let navigate = useNavigate();
    function handleClick() {
      navigate(-1);
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
            Edit Profile
          </h3>
        </Grid>
      </Grid>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <p
          style={{
            color: "#344054",
            marginTop: "5px",
            textAlign: "left",
            fontSizeL: "13px",
            fontWeight: "600",
          }}
        >
          Name
        </p>
        <TextField

          fullWidth
          sx={{
            "& .MuiInputLabel-root": {
              color: "#667085",
              fontFamily: "Montserrat",
            }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: "#000000",
                border: "1px solid",
                borderRadius: "8px",
                height: "47px",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#000000",
                border: "1px solid",
              },
            },
          }}
          label="Leah Martin"
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
          Phone Number
        </p>
        <TextField

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
          label="+1 (404) 354-7724"
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
                marginTop: "60% !important",
                border: "1px solid black !important",
                fontFamily: "Montserrat !important",
                width: "81px !important",
                height: "40px !important",
                textTransform: "capitalize !important",
              }}
              variant="contained"
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
                marginTop: "60% !important",
                border: "1px solid black !important",
                fontFamily: "Montserrat !important",
                width: "66px !important",
                height: "40px !important",
                textTransform: "capitalize !important",
              }}
              variant="contained"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ConsumerEditProfile
