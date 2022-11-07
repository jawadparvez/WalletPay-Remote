import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Link } from "@mui/material";
import Right from "../../../Assets/Images/right.png";
import { useNavigate } from "react-router-dom";

const HostHome = () => {
  const [value, setValue] = useState("1");
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
  };

  // navigate/routes for pages
  let navigate = useNavigate();
  function handleClick() {
    navigate("/HostTableManager");
  }
  function handleClickk() {
    navigate("/HostSettings");
  }

  //return statement
  return (
    <div>
      <Navbar />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="black"
            aria-label="lab API tabs example"
            sx={{
              "& .Mui-selected": {
                fontWeight: "600 ",
                color: "black !important",
                borderBottom: "#0077FF",
              },
            }}
          >
            <Tab
              style={{
                minWidth: "auto",
                marginLeft:'10px',
                fontFamily: "Montserrat",
                color: "#9298A3",
                fontSize: "17px",
                textTransform: "capitalize",
                padding: "0px",
              }}
              label="Home Feed"
              value="1"
            />
            <Tab
              style={{
                minWidth: "auto",
                marginLeft:"10px",
                fontFamily: "Montserrat",
                color: "#9298A3",
                fontSize: "17px",
                textTransform: "capitalize",

                padding: "0px",
              }}
              label="Notifications"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "90px",
              borderRadius: "8px",
            }}
          >
            <Grid container spacing={0}>
              <Grid
                style={{
                  borderRight: "1px solid black",
                  fontFamily: "Montserrat",
                }}
                className="background-blue"
                item
                xs={4}
              >
                <CardContent
                  style={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    fontWeight: "500",
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                  }}
                >
                  Tables
                </CardContent>
              </Grid>

              <Grid item xs={4}>
                <h4 className="bold">OPEN</h4>
                <p className="green"> 15</p>
              </Grid>
              <Grid item xs={4}>
                <h4 className="bold">CLOSED</h4>
                <p className="red"> 0</p>
              </Grid>
            </Grid>
          </Card>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <h4 className="bolder text-color">Table Manager</h4>
              </Grid>

              <Grid item xs={1}>
                <Link onClick={handleClick}>
                  <img className="right-icon" src={Right} alt=""></img>
                </Link>
              </Grid>
            </Grid>
          </Card>

          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <h4 className="bolder text-color">Settings</h4>
              </Grid>

              <Grid item xs={1}>
                <Link onClick={handleClickk}>
                  <img className="right-icon" src={Right} alt=""></img>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </TabPanel>
        <TabPanel value="2">
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
              backgroundColor: "#E3F2FD",
            }}
          >
            <p
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginTop: "5%",
              }}
              className="font-bold "
            >
              Welcome to walletpay. Get started with a quick tour.
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  display: "inline",
                }}
              >
                Take the tour?
              </Link>
            </p>
          </Card>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default HostHome;
