import React from "react";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Grid } from "@mui/material";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Right from "../../../Assets/Images/right.png";
import Plus from "../../../Assets/Images/plus.png";
import Card from "@mui/material/Card";

function ConsumerWallet() {
    let navigate = useNavigate();
    function handleClick() {
      navigate(-1);
    }
    function handleClickCard() {
      navigate("/ConsumerAddCard");
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
            Wallet
          </h3>
        </Grid>
      </Grid>

      <h4
        style={{
          fontSize: "25px",
          fontWeight: "600",
          marginTop: "25%",
          marginBottom: "2%",
        }}
      >
        Add payment method
      </h4>
      <p
        style={{
          marginLeft: "18%",
          marginRight: "18%",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        Choose an option below
      </p>

      <Card
        style={{
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "43px",
          marginBottom: "10px",
          borderRadius: "8px",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "40px",
        }}
      >
        <Grid container>
          <Grid item xs={1}>
            <img
              style={{ marginTop: "13px" }}
              src={Plus}
              alt=""
              onClick={handleClickCard}
            />
          </Grid>
          <Grid item xs={10}>
            <h4
              style={{
                textAlign: "left",
                marginTop: "4px",
                marginLeft: "10px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#0077FF",
              }}
              onClick={handleClickCard}
            >
              Add debit card
            </h4>
          </Grid>
          <Grid item xs={1}>
            <img
              style={{ marginTop: "13px" }}
              src={Right}
              alt=""
              onClick={handleClickCard}
            ></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default ConsumerWallet;
