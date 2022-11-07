import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Right from "../../../Assets/Images/right.png";
import Card from "@mui/material/Card";
import "./Consumerhome.css";
import { Link } from "react-router-dom";

function ConsumerHome() {
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("1");
  const [valuee, setValuee] = React.useState(0);

  function fetchcat() {
    fetch("https://jawad-fake-server-app.herokuapp.com/categoryy")
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
        console.log("Categories are being displayed from the database");
      });
  }
  useEffect(() => {
    fetchcat();
  }, []);

  function fetchitem() {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("Items are being retrieved from the database");
      });
  }
  useEffect(() => {
    fetchitem();
  }, []);

  const [selectedtab, setSelectedtab] = useState();
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
    setSelectedtab(event.target.ariaPlaceholder);
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <h6
            style={{
              textAlign: "left",
              marginLeft: "5%",
              marginTop: "3%",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            Italy Bar and Grill
          </h6>
        </Grid>
        <Grid item xs={4}>
          <p
            style={{
              textAlign: "right",
              marginRight: "10%",
              marginTop: "5%",
              fontSize: "17px",
              fontWeight: "600",
            }}
          >
            Cancel
          </p>
        </Grid>
      </Grid>

      <p 
        style={{
          textAlign: "left",
          marginLeft: "3%",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        Table 1 - Server Olivia J
      </p>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            value={valuee}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
            aria-label="lab API tabs example"
            sx={{
              "& .Mui-selected": {
                marginTop: "10px",
                color: "#0077FF !important",
                borderBottom: "#0077FF",
              },
            }}
          >
            {category.map((cat, index) => {
              return (
                <Tab
                  style={{
                    marginLeft: "15px",
                    minWidth: "auto",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#667085",
                    textTransform: "capitalize",
                    padding: "0px",
                  }}
                  label={cat.name}
                  value={cat.id}
                  id="tab-id"
                  aria-placeholder={cat.id}
                  name="hi"
                />
              );
            })}
          </TabList>
        </Box>
        {category.map((cat, index) => {
          return (
            <TabPanel value={cat.id}>
              {item.map((itm, index) => {
                if (itm.category === cat.id) {
                  return (
                    <Card
                      style={{
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        height: "51px",
                        marginBottom: "10px",
                        borderRadius: "8px",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={2}>
                          <Card
                            style={{
                              border: "1px solid black",
                              backgroundColor: "#D1E9FF",
                              fontFamily: "Montserrat",
                              width: "38px",
                              height: "37px",
                              marginTop: "6px",
                              marginLeft: "5px",
                              borderRadius: "100px",
                            }}
                          >
                            <p
                              style={{
                                textAlign: "center",
                                marginTop: "8px",
                                fontSize: "12px",
                              }}
                            >
                              FMS
                            </p>
                          </Card>
                        </Grid>
                        <Grid item xs={6}>
                          <h4
                            style={{
                              textAlign: "left",
                              marginTop: "7px",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {itm.name}
                          </h4>
                        </Grid>
                        <Grid item xs={3}>
                          <h4
                            style={{
                              textAlign: "right",
                              marginTop: "7px",
                              marginRight: "5px",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {itm.price}
                          </h4>
                        </Grid>
                        <Grid item xs={1}>
                          <Link to="/ConsumerOrder">
                            <img
                              style={{ marginTop: "18px" }}
                              src={Right}
                              alt=""
                              aria-placeholder={itm.id}
                            ></img>
                          </Link>
                        </Grid>
                      </Grid>
                    </Card>
                  );
                }
              })}
            </TabPanel>
          );
        })}
      </TabContext>
    </div>
  );
}

export default ConsumerHome;
