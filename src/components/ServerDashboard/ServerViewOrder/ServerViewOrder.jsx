import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@material-ui/core";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RightArrow from "../../../Assets/Images/rightarrow.png";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckIcon from "@mui/icons-material/Check";

function ServerViewOrder() {
  const [item, setItem] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("item is being retrieved");
      });
  }, []);
  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/orders")
      .then((response) => response.json())
      .then((result) => {
        setOrder(result);
        console.log("order is being retrieved");
      });
  }, []);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/ServerViewTab");
  }
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item xs={5}>
          <Link to="/tabhistory">
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
        <Grid item xs={7}>
          <h3
            style={{
              marginLeft: "auto",
              marginRight: "2px",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            Table 1 Total: $164.88
          </h3>
        </Grid>
      </Grid>

      <p
        style={{
          textAlign: "left",
          marginLeft: "12px",
          fontSize: "11px",
          fontWeight: "500",
          color: "#667085",
          marginTop: "10px",
          marginBottom: "0px",
        }}
      >
        Mark
      </p>
      <p
        style={{
          textAlign: "left",
          marginLeft: "12px",
          fontSize: "11px",
          fontWeight: "500",
          marginTop: "0px",
          color: "#667085",
          marginBottom: "0px",
        }}
      >
        Complete
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
                                  style={{
                                    color: "#0376FB",
                                    marginLeft: "1px",
                                  }}
                                />
                              }
                              checkedIcon={
                                <CheckIcon
                                  style={{
                                    color: "#0376FB",
                                    marginLeft: "1px",
                                    width: "18px",
                                    height: "18px",
                                  }}
                                />
                              }
                              sx={{
                                color: "#D0D5DD !important",
                                marginLeft: "7px !important",
                                position: "relative !important",
                                marginTop: "4px !important",
                                paddinTop: "0px !important",
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

export default ServerViewOrder;
