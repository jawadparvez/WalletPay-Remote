import React from 'react'
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Navbar from '../Navbar/Navbar'

function ConsumerCard() {

        //Navigate to the last opened page 
        let navigate = useNavigate();
        function handleClick() {
          navigate(-1);
        }
    
    //Styled Components
    const AddCardStyle = {
          color: "#0077FF",
          textAlign: "center",
          marginRight: "20px",
          fontSize: "20px",
          marginTop: "5%",
          fontFamily: "Montserrat !important",
        };

    const AddCardTextFieldStyle = {
            "& .MuiInputLabel-root": { color: "#0077FF" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                fontFamily: "Montserrat",
                fontWeight: "700",
                border: "1px solid #000000",
                borderRadius: "8px",
                height: "47px",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                border: "1px solid #000000 ",
              },
            },
          };

      const CVVTextFieldStyle = {
                "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    border: "1px solid #000000",
                    borderRadius: "8px",
                    height: "47px",
                    color: "#667085",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    border: "1px solid #000000 ",
                    color: "#667085",
                  },
                },
              };
  //return statement
  return (
    <div>
      <Navbar />
      <h3 style={AddCardStyle}>Add Card</h3>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <p style={{ color: "#344054" }} className="left">
          Card Holder Name
        </p>
        <TextField
          fullWidth
          sx={AddCardTextFieldStyle}
          variant="outlined"
          size="small"
        />
        <p style={{ color: "#344054" }} className="left">
          Card Nickname (optional)
        </p>
        <TextField
          fullWidth
          sx={AddCardTextFieldStyle}
          variant="outlined"
          size="small"
        />
        <p style={{ color: "#344054" }} className="left">
          Card Number
        </p>
        <TextField
          fullWidth
          sx={AddCardTextFieldStyle}
          variant="outlined"
          size="small"
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p style={{ color: "#344054" }} className="left">
              CVV
            </p>
            <TextField
              fullWidth
              sx={CVVTextFieldStyle}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <p style={{ color: "#344054" }} className="left">
              Expiration Date
            </p>
            <TextField
              fullWidth
              sx={CVVTextFieldStyle}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          className="signin-button button"
          sx={{
            color: "Red !important",
            backgroundColor: "white !important",
            marginTop: "20px!important",
            borderRadius: "8px !important",
            border: "1px solid black !important",
            fontFamily: "Montserrat !important",
            height: "44px !important",
          }}
          variant="contained"
          // onClick={handleClosee}
        >
          Cancel
        </Button>

        <Button
          fullWidth
          className="signin-button button"
          sx={{
            color: "white !important",
            backgroundColor: "#0077FF !important",
            marginTop: "10px!important",
            borderRadius: "8px !important",
            border: "1px solid black !important",
            fontFamily: "Montserrat !important",
            height: "44px !important",
          }}
          variant="contained"
          onClick={handleClick}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default ConsumerCard
