import React, { useState, useEffect } from "react";
import "./tabhistory.css";
import Navbar from "../Navbar/Navbar";
import { Divider, Grid } from "@material-ui/core";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Card from "@mui/material/Card";
import { Checkbox } from "@mui/material";
import Microphone from "../../../Assets/Images/Microphone.png";
import RightArrow from "../../../Assets/Images/rightarrow.png";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckIcon from "@mui/icons-material/Check";

function TabHistory3({ page, setPage }) {

  //Declaration of constant to store data from api
  const [item, setItem] = useState([]);
  const [order, setOrder] = useState([]);

  //useEffect to fetch items from the api
  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("item is being retrieved");
      });
  }, []);

  //useEffect to fetch orders from the api
  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/orders")
      .then((response) => response.json())
      .then((result) => {
        setOrder(result);
        console.log("order is being retrieved");
      });
  }, []);

  //return statement
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={6}>
          <img
            style={{
              marginTop: "10px",
              marginLeft: "10px",
              AlignItems: "left !important",
              display: "flex",
            }}
            src={BlackArrow}
            alt=""
            onClick={() => {
              setPage(page - 2);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <h3
            style={{
              textAlign: "right",
              marginRight: "20px",
              fontSize: "18px",
            }}
          >
            Tab History
          </h3>
        </Grid>
      </Grid>
      <Paper
        style={{
          p: "2px 4px",
          color: "black",
          borderRadius: "20px",
          marginLeft: "30px",
          display: "flex",
          alignItems: "center",
          background: "#FAFAFA",
          width: 300,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <img src={Microphone} alt="" />
        </IconButton>
      </Paper>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              marginLeft: "20px",
              marginRight: "10px",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <h4 className="tab-heading text-color">Today's Tab Orders</h4>
                <p className="tab-value"> 65</p>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            style={{
              marginTop: "20px",
              marginRight: "20px",
              marginLeft: "10px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid item xs={12}>
              <h4 className="tab-heading text-color">Avg. Tab Value</h4>
              <p className="tab-value"> $51.92</p>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Divider />

      <p
        style={{
          textAlign: "left",
          marginTop:"10px",
          marginLeft: "10px",
          color: "#B1B1B1",
          fontFamily: "Montserrat",
        }}
      >
        1 - 3 of 55 results
      </p>

      {order.map((ord) => {
        return (
          <div>
            <Card
              style={{
                marginTop: "10px",
                border: "1px solid black",
                fontFamily: "Montserrat",
                height: "163px",
                borderRadius: "8px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  {item.map((cat) => {
                    return (
                      <div>
                        <Grid container spacing={1}>
                          <Grid className="checkbox-modal" item xs={1}>
                            <Checkbox
                              icon={
                                <CheckBoxOutlineBlankRoundedIcon
                                  sx={{
                                    color: "#0376FB !important",
                                    marginLeft: "1px !important",
                                    padding:"0px",
                                  }}
                                />
                              }
                              checkedIcon={
                                <CheckIcon
                                  sx={{
                                    color: "#0376FB !important",
                                    marginLeft: "1px !important",
                                    width: "18px !important",
                                    height: "18px !important",
                                    padding:"0px"
                                  }}
                                />
                              }
                              sx={{
                                color: "#D0D5DD !important",
                                marginLeft: "7px !important",
                                position: "relative !important",
                                marginTop: "4px !important",
                                paddinTop: "0px !important",
                                padding:"0px",
                                marginBottom: "0px !important",
                                width: "16px !important",
                                height: "16px !important",
                                paddingLeft: "0px !important",
                                boxShadow: "0px 0px 0px 4px #F4EBFF !important",
                                borderRadius: "4px !important",
                                left: "12px !important",
                                "&.Mui-checked": {
                                  color: "#0077FF !important",
                                  outline: "none !important",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={11}>
                            <p
                              style={{
                                color: "black",
                                fontWeight: "500",
                                textAlign: "left",
                                fontSize: "12px",
                                marginTop: "5px",
                                marginLeft: "29px",
                              }}
                              className="spacing-3"
                            >
                              {cat.name}
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={6}>
                  <p
                    style={{
                      textAlign: "right",
                      fontSize: "10px",
                      textClor: "black",
                      marginTop: "4px",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    TAB ID1263
                  </p>
                  <img
                    style={{
                      display: "flex",
                      position: "relative",
                      textAlign: "right",
                      marginLeft: "140px",
                      marginTop: "40px",
                    }}
                    src={RightArrow}
                    alt=""
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      textAlign: "right",
                      marginRight: "25px",
                      marginTop: "50px",
                    }}
                  >
                    <span style={{ color: "#FF1F00" }}>Unpaid</span> $54.96
                  </p>
                </Grid>
              </Grid>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default TabHistory3;
