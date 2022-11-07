import React from 'react'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from './OrderNavbar.jsx'

function ConsumerOrder() {
 let navigate = useNavigate();
     function handleClick() {
       navigate("/ConsumerOrderItems");
     } 
  return (
    <div>
      <Navbar/>

      <Card
            style={{
              border: "1px solid black",
              marginTop: "-20%",
              width: "329px",
              height: "148px",
              marginLeft: "6%",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={3}>
                <Card
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#D1E9FF",
                    fontFamily: "Montserrat",
                    width: "70px",
                    height: "70px",
                    marginTop: "33px",
                    marginLeft: "10px",
                    borderRadius: "100px",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "20px",
                      fontSize: "15px",
                    }}
                  >
                    FMS
                  </p>
                </Card>
              </Grid>
              <Grid item xs={9}>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginTop: "20px",
                    textAlign: "left",
                    marginLeft: "5px",
                    marginBottom: "0px",
                  }}
                >
                  Italy 5 Cheese Dinner
                </h4>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginLeft: "5px",
                    marginTop: "0px",
                  }}
                >
                  $21.99
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "400",
                    marginLeft: "5px",
                    marginTop: "0px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscin
                </p>
              </Grid>
            </Grid>
          </Card>

          <p
            style={{
              textAlign: "left",
              fontSize: "15px",
              fontWeight: "600",
              marginLeft: "25px",
              marginTop: "30px",
            }}
          >
            Select 1st Side
          </p>
          <Grid container>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Ceaser Salad
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Fries
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Mashed Potatoes
                </p>
              </Card>
            </Grid>
          </Grid>

          <p
            style={{
              display: "flex",
              textAlign: "left",
              fontSize: "15px",
              fontWeight: "600",
              marginLeft: "25px",
              marginTop: "30px",
            }}
          >
            Select 2nd Side
          </p>
          <Grid container>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Ceaser Salad
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Fries
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Mashed Potatoes
                </p>
              </Card>
            </Grid>
          </Grid>

          <TextField
            fullWidth
            sx={{
              marginLeft: "0px",
              width: "330px",
              marginTop: "70px",

              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid black",
                  borderRadius: "8px",
                  height: "95px",
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
            variant="outlined"
            size="small"
            rows={5}
          />
          <Button
            fullWidth
            className="button"
            sx={{
              color: "White !important",
              marginTop: "70px !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
              marginLeft: "10px",
              width: "330px",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Add to Tab
          </Button>
    </div>
  )
}

export default ConsumerOrder
