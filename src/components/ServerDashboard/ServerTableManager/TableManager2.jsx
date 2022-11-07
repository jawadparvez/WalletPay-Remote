import React from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import Plus from "../../../Assets/Images/plus.png"
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import "./servertable.css";
import { Link } from "react-router-dom";



function TableManager2({ page, setPage }) {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={6}>
          <img
            style={{
              marginTop: "15px",
              marginLeft: "10px",
              padding:'0px',
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
        <Grid item xs={6}>
          <h3
            style={{
              marginLeft: "auto",
              fontSize: "18px",
              marginTop: "7px",
            }}
          >
            Table Manager
          </h3>
        </Grid>
      </Grid>

      <h2 style={{ marginTop: "30%", fontSize: "25px", fontWeight: "600" }}>
        Add items to order
      </h2>
      <p style={{ fontSize: "16px", marginLeft: "3%" }}>
        Select the plus sign below to make selections from the menu.
      </p>
      <Link to='/ServerMenu'>
        <img
          style={{ marginTop: "15%", width: "20.55px", height: "20.55px" }}
          src={Plus}
          alt=""
        />
      </Link>
    </div>
  );
}

export default TableManager2;
