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
import { AreaChart, Area, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckIcon from "@mui/icons-material/Check";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Calender from "../../../Assets/Images/calendar.png";

function TabHistory2({page, setPage}) {

  //Declaration of contants to store the data fetched from the api 
  const [item, setItem] = useState([]);
  const [order, setOrder] = useState([]);

  //useEffect to fetch the item from the api 
  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("item is being retrieved");
      });
  }, []);

  //useEffect to fetch the orders from the api
  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/orders")
      .then((response) => response.json())
      .then((result) => {
        setOrder(result);
        console.log("order is being retrieved");
      });
  }, []);

  //Data for AreaChart to show data until backend is developed.
  const Ranges = [
  ];
  const data = [
    {
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  //navigation to view order page
  let navigate = useNavigate();
  function handleClick() {
    navigate("/viewOrder");
  }

  //return statement
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
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
              setPage(page - 1);
            }}
          />
        </Grid>
        <Grid item xs={10}>
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
      <Card
        style={{
          marginTop: "10px",
          fontFamily: "Montserrat",
          height: "275px",
          borderRadius: "50px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        {" "}
        <Grid container>
          <Grid item xs={2}>
            <Card
              style={{
                marginTop: "30%",
                marginLeft: "50px",
                width: "42px",
                height: "39px",
                background: "#0077FF",
                borderRadius: "10px",
              }}
            >
              <img style={{ marginTop: "7px" }} src={Calender} alt=""></img>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <DateRangePicker
              style={{
                marginTop: "20px",
                marginLeft:"30px",
                outline: "none",
                width: "200px",
                "&. svg":{
                  color:"green"
                }      
              }}
              placeholder="09 - 13 May"
              ranges={Ranges}
              appearance="subtle"
              showOneCalendar
              preventOverflow
              caretAs={AssessmentIcon}
              placement="auto"
            />
          </Grid>
        </Grid>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8BD9E9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8BD9E9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8BD9E9"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </Card>
      <Divider style={{ marginTop: "10px" }} />

      <p
        style={{
          textAlign: "left",
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
                padding:'0px',
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
                                    padding:"0px",
                                  }}
                                />
                              }
                              checkedIcon={
                                <CheckIcon
                                  sx={{
                                    color: "#0376FB !important",
                                    width: "18px !important",
                                    padding:"0px",
                                    height: "18px !important",
                                  }}
                                />
                              }
                              sx={{
                                color: "#D0D5DD !important",
                                position: "relative !important",
                                marginTop: "4px !important",
                                paddinTop: "0px !important",
                                marginBottom: "0px !important",
                                width: "16px !important",
                                height: "16px !important",
                                paddingLeft: "0px !important",
                                padding:"0px",
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
                    onClick={handleClick}
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

export default TabHistory2;
