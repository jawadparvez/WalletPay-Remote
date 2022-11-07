import React from 'react'
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Button, Link } from "@mui/material";
import Arrow from '../../Assets/Images/arrow.png'
import WDot from "../../Assets/Images/wDot.png";
import Dot from "../../Assets/Images/Dot.png";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import './register2.css'

function Register2({ page, setPage, formData, setFormData }) {


  //Navigation
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  
  //Posting Register details to Database
  function submitHandle() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/users", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      //navigation
      navigate("/verification");
  }


  //Styling Components
  const StyleTextField = {
    "& .MuiInputLabel-root": { color: "gray" }, //styles the label
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        borderColor: "#000000",
        border: "1px solid",
        borderRadius: "8px",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "#000000",
        border: "1px solid",
      },
    },
  };
  const StyleButton = {
    color: "white",
    backgroundColor: "#0077FF",
    borderColor: "black",
    borderRadius: "8px",
    border: "1px solid black",
    fontFamily:"Montserrat !important",
    height: "44px",
  };


  //return Statement
  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <h5 className="title">Resturant Info</h5>
          <Link
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <img className="arrow-icon" src={Arrow} alt=""></img>
          </Link>
          <h5 className="left marginTop20">Resturant Name</h5>

          <TextField
            fullWidth
            sx={StyleTextField}
            id="outlined-basic"
            label="Enter resturant name"
            variant="outlined"
            className="form-group"
            size="small"
            value={formData.restaurantName} //setting the value of the form to the props value
            onChange={
              (e) =>
                setFormData({ ...formData, restaurantName: e.target.value }) //setting the formData to the value input of the textfield
            }
          />

          <h5 className="left">Resturant Address</h5>
          <TextField
            fullWidth
            sx={StyleTextField}
            id="outlined-basic"
            label="Enter resturant address"
            variant="outlined"
            className="form-group"
            size="small"
            value={formData.restaurantAddress} //setting the value of the form to the props value
            onChange={
              (e) =>
                setFormData({ ...formData, restaurantAddress: e.target.value }) //setting the formData to the value input of the textfield
            }
          />

          <h5 className="left">Number of Tables</h5>
          <TextField
            fullWidth
            sx={StyleTextField}
            id="outlined-basic"
            label="Enter number"
            variant="outlined"
            className="form-group"
            size="small"
            value={formData.tableCount} //setting the value of the form to the props value
            onChange={
              (e) => setFormData({ ...formData, tableCount: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
          <div className="align-center">
            <img className="wdot-icon" src={WDot} alt="wdot"></img>
            <img className="dot-icon" src={Dot} alt="dot"></img>
          </div>
          <Button
            fullWidth
            className="google-button button"
            sx={StyleButton}
            variant="contained"
            onClick={() => {
              submitHandle();
            }}
          >
            Create Account
          </Button>
          <div className="alreadyy-account">
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <p className="text-account">Already have an account?</p>
              </Grid>
              <Grid item xs={4}>
                <Link
                  style={{ textDecoration: "none" }}
                  className="Sign-Up"
                  onClick={handleClick}
                >
                  Log In
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Register2
