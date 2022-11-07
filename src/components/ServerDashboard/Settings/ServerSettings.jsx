import React from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ServerSettings() {

  const [value, setValue] = useState("1");
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
  };

  const [showe, setShowe] = useState(true);
  const [showwe, setShowwe] = useState(false);
  const [shower, setShower] = useState(true);
  const [showwer, setShowwer] = useState(false);



  function onClickShoww() {
    setShowe(!showe);
    setShowwe(!showwe);
  }

  function onClickShower() {
    setShower(!shower);
    setShowwer(!showwer);
  }

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
                marginLeft: "-10px",
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
              textAlign: "right",
              marginRight: "20px",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            Settings
          </h3>
        </Grid>
      </Grid>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="black"
            aria-label="lab API tabs example"
            sx={{
              "& .Mui-selected": {
                color: "#0077FF !important",
                borderBottom: "#0077FF",
              },
            }}
          >
            <Tab
              style={{
                marginLeft: "10px",
                minWidth: "auto",
                fontFamily: "Montserrat",
                color: "#667085",
                fontSize: "15px",
                textTransform: "capitalize",
                padding: "0px",
              }}
              label="Profile"
              value="1"
            />
            <Tab
              style={{
                minWidth: "auto",
                marginLeft:'10px',
                fontFamily: "Montserrat",
                color: "#667085",
                fontSize: "15px",
                textTransform: "capitalize",
                padding: "0px",
              }}
              label="Security"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          {showe ? (
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
                    Name
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginTop: "0px",
                      marginBottom: "20px",
                      marginLeft: "-10px",
                    }}
                  >
                    Leah Martin
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
                      border: "1px solid #0077FF !important",
                      fontFamily: "Montserrat !important",
                      width: "62px !important",
                      height: "27px !important",
                      textTransform: "capitalize !important",
                    }}
                    variant="contained"
                    onClick={onClickShoww}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>

              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                Email
              </p>
              <Grid container>
                <Grid item xs={9}>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "500",
                      marginTop: "0px",
                      marginBottom: "20px",
                      marginLeft: "-10px",
                    }}
                  >
                    leah23martin@italybarandgrill.com
                  </p>
                </Grid>
              </Grid>

              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                Phone Number
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                +1 (555) 023-9034
              </p>

              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                User Role
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                Admin
              </p>
            </>
          ) : null}
          {showwe ? (
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
                Name
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
                Email
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
                label="leah23martin@gmail.com"
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
                label="+1 (404) 354-7724"
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
                User Role
              </p>

              <p
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Admin
              </p>

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
                    onClick={onClickShoww}
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
                    onClick={onClickShoww}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : null}
        </TabPanel>
        <TabPanel value="2">
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
                      border: "1px solid #0077FF !important",
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
              <p
                style={{
                  color: "#344054",
                  marginTop: "20px",
                  textAlign: "left",
                  fontSizeL: "13px",
                  fontWeight: "600",
                }}
              >
                User Role
              </p>

              <p
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Admin
              </p>

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
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default ServerSettings;
