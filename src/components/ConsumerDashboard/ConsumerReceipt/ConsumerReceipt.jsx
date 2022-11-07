import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Divider } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function ConsumerReceipt() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("item is being retrieved");
      });
  }, []);

const [open, setOpen] = useState(false);
const [opene, setOpene] = useState(false);
const [opener, setOpener] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const handleOpene = () => setOpene(true);
const handleClosee = () => setOpene(false);
const handleOpener = () => setOpener(true);
const handleCloser = () => setOpener(false);

function handleModal1() {
    handleOpene();
    handleClose();
}
function handleModal2() {
  handleClose();
  handleOpener();
}

  const stylee = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "36%",
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

   const style = {
     position: "absolute",
     paddingTop: "0px !important",
     paddingLeft: "15px !important",
     paddingRight: "15px !important",
     top: "47%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: 350,
     height: "520px",
     bgcolor: "white",
     border: "1px solid black",
     borderRadius: "8px",
     boxShadow: 24,
     zIndex: "+1",
     p: 4,
   };

  let navigate = useNavigate();
  function handleClick() {
  navigate("/ConsumerHome");
  }
  return (
    <div>
      <Navbar />
      <Card
        style={{
          borderRadius: "8px",
          border: "1px solid black",
          width: "332px",
          height: "max-content",
          marginLeft: "20px",
          marginTop: "30px",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <p
              style={{
                textAlign: "left",
                marginLeft: "8px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Receipt
            </p>
          </Grid>
          <Grid item xs={6}>
            <p
              style={{
                textAlign: "Right",
                marginRight: "8px",
                fontSize: "16px",
                fontWeight: "500",
              }}
              onClick={handleClick}
            >
              Close
            </p>
          </Grid>
        </Grid>

        <p
          style={{
            fontSize: "16px",
            marginTop: "30px",
            color: "#0077FF",
            fontWeight: "500",
          }}
        >
          Italy Bar & Grill
        </p>
        <p
          style={{
            fontSize: "11px",
            fontWeight: "500",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          2742 N Lake Dr, Columbus, GA, 31909{" "}
        </p>
        <p
          style={{
            fontSize: "11px",
            fontWeight: "500",
            marginTop: "0px",
            marginBottom: "30px",
          }}
        >
          Monday, Dec 28 2015 at 4.13pm
        </p>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            {item.map((cat) => {
              return (
                <div>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <p
                        style={{
                          color: "black",
                          fontWeight: "600",
                          textAlign: "left",
                          fontSize: "14px",
                          marginTop: "25px",
                        }}
                        className="spacing-3"
                      >
                        {cat.name}
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <p
                        style={{
                          fontSize: "14px",
                          textColor: "black",
                          marginTop: "23px",
                          fontWeight: "600",
                          textAlign: "right",
                          marginRight: "20px",
                        }}
                      >
                        {cat.price}
                      </p>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </Grid>
        <Divider
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            marginRight: "10px",
            border: "1px solid #C6C6C6",
            marginBottom: "20px",
          }}
        />

        <Grid container>
          <Grid item xs={8}>
            <p
              style={{
                textAlign: "left",
                marginLeft: "30px",
                fontSize: "14px",
                fontWeight: "600",
                marginTop: "5px",
                color: "#667085",
              }}
            >
              Subtotal
            </p>
          </Grid>
          <Grid item xs={4}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textAlign: "right",
                marginRight: "20px",
                color: "#667085",
                marginTop: "5px",
              }}
            >
              $50.97
            </p>
          </Grid>

          <Grid item xs={8}>
            <p
              style={{
                textAlign: "left",
                marginLeft: "30px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#667085",
                marginTop: "5px",
              }}
            >
              Tax
            </p>
          </Grid>
          <Grid item xs={4}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textAlign: "right",
                marginRight: "20px",
                color: "#667085",
                marginTop: "5px",
              }}
            >
              $3.99
            </p>
          </Grid>
          <Grid item xs={8}>
            <p
              style={{
                textAlign: "left",
                marginLeft: "30px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#667085",
                marginTop: "5px",
              }}
            >
              Tip
            </p>
          </Grid>
          <Grid item xs={4}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textAlign: "right",
                marginRight: "20px",
                color: "#667085",
                marginTop: "5px",
              }}
            >
              $5.00
            </p>
          </Grid>
          <Grid item xs={12}>
            <p
              style={{
                fontSize: "16px",
                textColor: "black",
                marginTop: "14px",
                fontWeight: "600",
                textAlign: "right",
                marginRight: "20px",
              }}
            >
              Total $ 59.96
            </p>
          </Grid>
        </Grid>

        <p
          style={{
            fontSize: "11px",
            fontWeight: "600",
            color: "#667085",
            marginTop: "20px",
            marginBottom: "0px",
          }}
        >
          Billed by Visa Debit 7811
        </p>
        <p
          style={{
            fontSize: "11px",
            fontWeight: "600",
            color: "#667085",
            marginTop: "0px",
            marginBottom: "30px",
          }}
        >
          ID 15462999657
        </p>
      </Card>
      </div>
      )}

export default ConsumerReceipt;
