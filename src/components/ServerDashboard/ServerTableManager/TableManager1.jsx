import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import "./servertable.css";
import { Divider } from "@material-ui/core";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = ["NO SERVER", "OLIVIA J", "ANDRE T", "CHASE G"];

const ServerTableManager = ({ page, setPage }) => {
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [table, setTable] = useState([]);

  function fetchtable() {
    fetch("https://jawad-fake-server-app.herokuapp.com/table")
      .then((response) => response.json())
      .then((result) => {
        setTable(result);
        console.log("table has been retrieved");
      });
  }
  useEffect(() => {
    fetchtable();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const stylee = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "43%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "350px",
    bgcolor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };

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
              marginTop: "7px",
            }}
          >
            Table Manager
          </h3>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <p
            style={{
              marginTop: "25px",
              textAlign: "left",
              marginLeft: "10px",
              fonSize: "14px",
              fontWeight: "500",
            }}
          >
            My Assigned Tables
          </p>
        </Grid>
        <Grid item xds={4}>
          <Button
            fullWidth
            sx={{
              color: "#0077FF !important",
              marginLeft: "10px!important",
              backgroundColor: "white !important",
              borderRadius: "8px !important",
              fontWeight: "500 !important",
              marginTop: "20px !important",
              border: "1px solid #0077FF !important",
              fontFamily: "Montserrat !important",
              width: "100px !important",
              height: "27px !important",
              textTransform: "capitalize !important",
            }}
            variant="contained"
            onClick={handleOpen}
          >
            New Tab
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2}>
          <span className="centerServer color">Table</span>
        </Grid>
        <Grid item xs={2}>
          <span className="centerServer">Time</span>
        </Grid>
        <Grid item xs={2}>
          <span className="centerServer-t">Size</span>
        </Grid>
        <Grid item xs={2}>
          <span className="centerServer-t-c">Status</span>
        </Grid>
        <Grid item xs={4}>
          <span className="center-tServer">Order</span>
        </Grid>
      </Grid>
      <div style={{marginLeft:'20px', marginRight:'20px'}}>
        {table.map((tab, index) => {
          return (
            <Card
              style={{
                border: "1px solid black",
                fontFamily: "Montserrat",
                marginBottom: "5px",
                height: "24px",
                borderRadius: "8px",
                marginTop: "7px",
              }}
            >
              <Grid container>
                <Grid item xs={2}>
                  <Card
                    style={{
                      border: "1px solid black",
                      fontFamily: "Montserrat",
                      marginTop: "2px",
                      marginLeft: "2px",
                      height: "17px",
                      width: "50px",
                      borderRadius: "8px",
                    }}
                  >
                    <span
                      style={{
                        marginTop: "-1px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "20px",
                        display: "flex",
                      }}
                    >
                      {tab.id}
                    </span>
                  </Card>
                </Grid>
                <Grid item xs={2}>
                  <span
                    style={{
                      marginTop: "3px",
                      fontSize: "12px",
                      fontWeight: "600",
                      marginLeft: "0px",
                      display: "flex",
                    }}
                  >
                    {tab.time}
                  </span>
                </Grid>
                <Grid item xs={2}>
                  <span
                    style={{
                      marginTop: "0px",
                      fontSize: "17px",
                      fontWeight: "600",
                      marginLeft: "15px",
                      display: "flex",
                    }}
                  >
                    {tab.seats}
                  </span>
                </Grid>
                <Grid item xs={2}>
                  <Card
                    style={{
                      border: "1px solid black",
                      fontFamily: "Montserrat",
                      marginTop: "2px",
                      height: "19px",
                      width: "60px",
                      marginLeft: "-8px",
                      backgroundColor: "#54C242",
                      color: "white",
                      borderRadius: "8px",
                    }}
                  >
                    <span
                      style={{
                        marginTop: "0px!important",
                        fontSize: "13px",
                        marginLeft: "9px",
                        display: "flex",
                      }}
                    >
                      {tab.status}
                    </span>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    style={{
                      height: "19px",
                      marginTop: "0px",
                      marginLeft: "-2px",
                      backgroundColor: "#0077FF",
                      fontSize: "12px",
                      color: "white",
                      textAlign: "left",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  >
                    -----
                  </Button>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <input
            style={{ marginTop: "40px" }}
            type={"number"}
            className="center-textInput"
          ></input>
          <Divider
            style={{
              color: "black ",
              marginTop: "0px ",
              width: "30%",
              justifyContent: "center",
              marginLeft: "110px ",
              border: "1px solid black",
            }}
          />
          <p
            style={{
              marginLeft: "20px",
              fontSize: "15px",
              width: "273px",
              marginTop: "5px",
            }}
          >
            Select the table number to create a new order.
          </p>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              marginTop: "30px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClose}
          >
            Add
          </Button>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "darkgray !important",
              backgroundColor: "white !important",
              borderColor: "black !important",
              marginTop: "10px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              AlignText: "end !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ServerTableManager;
