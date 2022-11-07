import React from "react";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Grid } from "@mui/material";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../Assets/Images/rightarrow.png";
import Card from "@mui/material/Card";
import Navbar from "../Navbar/Navbar";

function ConsumerDetailReceipts() {
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
                marginLeft: "10px",
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
              color: "#0077FF",
              textAlign: "right",
              marginRight: "20px",
              fontSize: "20px",
              marginTop: "5px",
              fontFamily: "Montserrat !important",
            }}
          >
            Receipts
          </h3>
        </Grid>
      </Grid>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <Card
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            marginTop: "30px",
            height: "60px",
          }}
        >
          <Grid container>
            <Grid item xs={7}>
              <p
                style={{
                  color: "#0077FF",
                  textAlign: "left",
                  marginLeft: "10px",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginTop: "18px",
                }}
              >
                Italy Bar and Grill
              </p>
            </Grid>
            <Grid item xs={4}>
              <p
                style={{
                  marginTop: "18px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                3/13/2022
              </p>
            </Grid>
            <Grid item xs={1}>
              <img
                style={{ marginTop: "18px", marginRight: "5px" }}
                src={Arrow}
                alt=""
              />
            </Grid>
          </Grid>
        </Card>
      </div>

      <h4
        style={{
          fontSize: "25px",
          fontWeight: "600",
          marginTop: "35%",
          marginBottom: "5%",
        }}
      >
        No Receipts yet
      </h4>
      <p
        style={{
          marginLeft: "18%",
          marginRight: "18%",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        Once you wrap up your first order, this is where the digital receipt
        will live.
      </p>
    </div>
  );
}

export default ConsumerDetailReceipts;
