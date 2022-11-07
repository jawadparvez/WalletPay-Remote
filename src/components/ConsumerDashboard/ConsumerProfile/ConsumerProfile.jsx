import React from 'react'
import Card from "@mui/material/Card";
import Link from "@material-ui/core/Link";
import { Grid } from "@mui/material";
import Arrow from "../../../Assets/Images/rightarrow.png"
import Navbar from "../Navbar/Navbar.jsx"
import { useNavigate } from "react-router-dom";
import './ConsumerProfile.css'

function ConsumerProfile() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/EditProfile");
  }
  function handleNavigateReceipt() {
    navigate("/ConsumerDetailReceipt");
  }
  function handleNavigatePassword() {
    navigate("/ConsumerPassword");
  }
  function handleNavigateWallet() {
    navigate("/ConsumerWallet");
  }

  function handleClickLogOut() {
    navigate("/ConsumerLogin");
  }
  return (
    <div>
      <Navbar />
      <p
        style={{
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "left",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        Hello there,
      </p>
      <div style={{ marginRight: "20px", marginLeft: "20px" }}>
        <Card
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            height: "117px",
            marginTop: "30px",
          }}
        >
          <h4
            style={{
              marginTop: "5px",
              textAlign: "left",
              marginLeft: "15px",
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "0px",
            }}
          >
            Kaniyah Thomas
          </h4>
          <p
            style={{
              marginTop: "0px",
              textAlign: "left",
              marginLeft: "15px",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            +1 (706) 975-6521
          </p>
          <Grid container>
            <Grid item xs={10}>
              <Link style={{ textDecoration: "none" }} onClick={handleClick}>
                <p
                  style={{
                    color: "#0077FF",
                    textAlign: "left",
                    marginLeft: "18px",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Edit Profile
                </p>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link onClick={handleClick}>
                <img style={{ marginTop: "20px" }} src={Arrow} alt="" />
              </Link>
            </Grid>
          </Grid>
        </Card>

        <Card
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            marginTop: "20px",
            height: "60px",
          }}
        >
          <Grid container>
            <Grid item xs={10}>
              <Link
                style={{ textDecoration: "none" }}
                onClick={handleNavigateReceipt}
              >
                <p
                  style={{
                    color: "#0077FF",
                    textAlign: "left",
                    marginLeft: "18px",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "18px",
                  }}
                >
                  Receipts
                </p>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link
                style={{ textDecoration: "none" }}
                onClick={handleNavigateReceipt}
              >
                <img style={{ marginTop: "18px" }} src={Arrow} alt="" />
              </Link>
            </Grid>
          </Grid>
        </Card>
        <Card
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            marginTop: "20px",
            height: "60px",
          }}
        >
          <Grid container>
            <Grid item xs={10}>
              <Link
                style={{ textDecoration: "none" }}
                onClick={handleNavigateWallet}
              >
                <p
                  style={{
                    color: "#0077FF",
                    textAlign: "left",
                    marginLeft: "18px",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "18px",
                  }}
                >
                  Wallet
                </p>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link
                style={{ textDecoration: "none" }}
                onClick={handleNavigateWallet}
              >
                <img style={{ marginTop: "18px" }} src={Arrow} alt="" />
              </Link>
            </Grid>
          </Grid>
        </Card>
        <Card
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            marginTop: "20px",
            height: "60px",
          }}
        >
          <Grid container>
            <Grid item xs={10}>
              <Link
                style={{ textDecoration: "none" }}
                onClick={handleNavigatePassword}
              >
                <p
                  style={{
                    color: "#0077FF",
                    textAlign: "left",
                    marginLeft: "18px",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "18px",
                  }}
                >
                  Security
                </p>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link
                style={{ textDecoration: "none" }}
                onClick={handleNavigatePassword}
              >
                <img style={{ marginTop: "18px" }} src={Arrow} alt="" />
              </Link>
            </Grid>
          </Grid>
        </Card>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Link
          style={{ textDecoration: "none" }}
          className="Sign-outConsumer"
          onClick={handleClickLogOut}
        >
          Sign-Out
        </Link>
      </div>
    </div>
  );
}

export default ConsumerProfile
