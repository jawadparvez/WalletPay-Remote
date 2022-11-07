import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Divider } from "@material-ui/core";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Right from "../../../Assets/Images/right.png";
import Plus from "../../../Assets/Images/plus.png";

function ConsumerOrderItems() {

    const [item, setItem] = useState([]);

    useEffect(() => {
      fetch("https://jawad-fake-server-app.herokuapp.com/item")
        .then((response) => response.json())
        .then((result) => {
          setItem(result);
          console.log("item is being retrieved");
        });
    }, []);

     const [show, setShow] = useState(true);
     const [showe, setShowe] = useState(false);
     const [showw, setShoww] = useState(true);
     const [showwe, setShowwe] = useState(false);
     const [shower, setShower] = useState(false);

    function onClickShoww() {
       setShow(!show);
       setShowe(!showe);
       setShoww(!showw);
       setShowwe(!showwe);
     }
    function onClickTip() {
        handleOpen();
        setShower(true);
        setShowwe(false);
        setShoww(false);
    }

    function onClickOpenCard () {
        handleOpenConfirmPayment();
        handleClose();
    }

    const [open, setOpen] = useState(false);
    const [opene, setOpene] = useState(false);
    const [openConfirmPayment, setOpenConfirmPayment] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpene = () => setOpene(true);
    const handleClosee = () => setOpene(false);
    const handleOpenConfirmPayment = () => setOpenConfirmPayment(true);
    const handleCloseConfirmPayment = () => setOpenConfirmPayment(false);


    let navigate = useNavigate();

    function NavigateReceipt() {
      navigate("/ConsumerReceipt");
    }
    function handleClick() {
      navigate(-1);
    }

    function handleOpenNewPayment () {
      handleOpene();
      handleCloseConfirmPayment();
    }

    const stylee = {
       position: "absolute",
       paddingTop: "0px !important",
       paddingLeft: "15px !important",
       paddingRight: "15px !important",
       top: "30%",
       left: "50%",
       transform: "translate(-50%, -50%)",
       width: 350,
       height: "250px",
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
       top: "50%",
       left: "50%",
       transform: "translate(-50%, -50%)",
       width: 350,
       height: "570px",
       bgcolor: "white",
       border: "1px solid black",
       borderRadius: "8px",
       boxShadow: 24,
       zIndex: "+1",
       p: 4,
     };

     const styleConfirmPayment = {
       position: "absolute",
       paddingTop: "0px !important",
       paddingLeft: "15px !important",
       paddingRight: "15px !important",
       top: "40%",
       left: "50%",
       transform: "translate(-50%, -50%)",
       width: 350,
       height: "320px",
       bgcolor: "white",
       border: "1px solid black",
       borderRadius: "8px",
       boxShadow: 24,
       zIndex: "+1",
       p: 4,
     };
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item xs={6}>
          <p
            style={{
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "10px",
              marginTop: "30px",
            }}
          >
            ID1263
          </p>
        </Grid>
        <Grid item xs={6}>
          <p
            style={{
              textAlign: "right",
              fontSize: "16px",
              fontWeight: "600",
              marginRight: "30px",
              marginTop: "30px",
            }}
          >
            Cancel
          </p>
        </Grid>
      </Grid>
      <Divider
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          border: "1px solid #C6C6C6",
        }}
      />
      {show ? (
        <>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {item.map((cat) => {
                return (
                  <div>
                    <Card
                      style={{
                        marginTop: "10px",
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        height: "50px",
                        borderRadius: "8px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <p
                            style={{
                              color: "black",
                              fontWeight: "600",
                              textAlign: "left",
                              fontSize: "13px",
                              marginTop: "15px",
                            }}
                            className="spacing-3"
                          >
                            {cat.name}
                          </p>
                        </Grid>
                        <Grid item xs={3}>
                          <p
                            style={{
                              fontSize: "12px",
                              textColor: "black",
                              marginTop: "14px",
                              fontWeight: "600",
                              textAlign: "right",
                              marginRight: "0px",
                            }}
                          >
                            {cat.price}
                          </p>
                        </Grid>
                        <Grid item xs={3}>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                              marginTop: "15px",
                              textAlign: "right",
                              marginRight: "10px",
                            }}
                          >
                            <span style={{ color: "#FF1F00" }}>Remove</span>
                          </p>
                        </Grid>
                      </Grid>
                    </Card>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </>
      ) : null}
      {showe ? (
        <>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {item.map((cat) => {
                return (
                  <div>
                    <Card
                      style={{
                        marginTop: "10px",
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        height: "50px",
                        borderRadius: "8px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={8}>
                          <p
                            style={{
                              color: "black",
                              fontWeight: "600",
                              textAlign: "left",
                              fontSize: "13px",
                              marginTop: "15px",
                            }}
                            className="spacing-3"
                          >
                            {cat.name}
                          </p>
                        </Grid>
                        <Grid item xs={4}>
                          <p
                            style={{
                              fontSize: "12px",
                              textColor: "black",
                              marginTop: "14px",
                              fontWeight: "600",
                              textAlign: "right",
                              marginRight: "20px",
                            }}
                          >
                            {cat.price}
                          </p>
                        </Grid>
                      </Grid>
                    </Card>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </>
      ) : null}

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
            }}
          >
            Subtotal
          </p>
        </Grid>
        <Grid item xs={4}>
          <p style={{ fontSize: "14px", fontWeight: "600" }}>$50.97</p>
        </Grid>

        <Grid item xs={8}>
          <p
            style={{
              textAlign: "left",
              marginLeft: "30px",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "1px",
            }}
          >
            Tax
          </p>
        </Grid>
        <Grid item xs={4}>
          <p style={{ fontSize: "14px", fontWeight: "600", marginTop: "1px" }}>
            $3.99
          </p>
        </Grid>
      </Grid>

      <Card
        style={{
          width: "345.5px",
          height: "43px",
          marginLeft: "15px",
          border: "1px solid black",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <p
              style={{ marginTop: "10px", fontSize: "14px", fontWeight: "600" }}
            >
              Tip
            </p>
          </Grid>
          <Divider
            style={{
              height: "40px",
              fontWeight: "600",
              color: "black",
              borderRight: "1px solid black",
            }}
            orientation="vertical"
            flexItem
          />

          <Grid item xs={2}>
            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#0077FF",
              }}
            >
              10%
            </p>
          </Grid>
          <Divider
            style={{
              height: "40px",
              fontWeight: "600",
              color: "black",
              borderRight: "1px solid black",
            }}
            orientation="vertical"
            flexItem
          />
          <Grid item xs={2}>
            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#0077FF",
              }}
            >
              15%
            </p>
          </Grid>
          <Divider
            style={{
              height: "40px",
              fontWeight: "600",
              color: "black",
              borderRight: "1px solid black",
            }}
            orientation="vertical"
            flexItem
          />
          <Grid item xs={3}>
            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#0077FF",
              }}
              onClick={onClickTip}
            >
              Custom
            </p>
          </Grid>
          <Divider
            style={{
              height: "40px",
              fontWeight: "600",
              color: "black",
              borderRight: "1px solid black",
            }}
            orientation="vertical"
            flexItem
          />
          <Grid item xs={2}>
            <p
              style={{ marginTop: "10px", fontSize: "14px", fontWeight: "600" }}
            >
              $0.00
            </p>
          </Grid>
        </Grid>
      </Card>
      <p style={{ marginTop: "20px", fontSize: "15px", fontWeight: "600" }}>
        Total: $ 34.98
      </p>
      {showw ? (
        <>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "30px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
              width: "340px",
            }}
            variant="contained"
            onClick={onClickShoww}
          >
            Submit Order
          </Button>
        </>
      ) : null}
      {showwe ? (
        <>
          <p
            style={{
              marginTop: "40px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#0077FF",
            }}
          >
            Order Submitted
          </p>
        </>
      ) : null}
      {shower ? (
        <>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "30px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
              width: "340px",
            }}
            variant="contained"
            onClick={handleOpenConfirmPayment}
          >
            Pay Now
          </Button>
        </>
      ) : null}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "black",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Enter tip amount
          </p>
          <input
            style={{ marginTop: "20px" }}
            type={"number"}
            className="center-textInput"
          ></input>
          <Divider
            style={{
              color: "black ",
              marginTop: "10px ",
              width: "100%",
              justifyContent: "center",
              marginLeft: "0px ",
              borderBottom: "1px solid black",
            }}
          />

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
            onClick={onClickOpenCard}
          >
            Pay
          </Button>
        </Box>
      </Modal>
      <Modal
        open={opene}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "black",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Confirm Payment
          </p>

          <p style={{ color: "#344054" }} className="left">
            Card Holder Name
          </p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#0077FF" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #000000 ",
                },
              },
            }}
            variant="outlined"
            size="small"
          />
          <p style={{ color: "#344054" }} className="left">
            Card Nickname (optional)
          </p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#0077FF" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #000000 ",
                },
              },
            }}
            variant="outlined"
            size="small"
          />
          <p style={{ color: "#344054" }} className="left">
            Card Number
          </p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  height: "47px",
                  color: "#667085",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #000000 ",
                  color: "#667085",
                },
              },
            }}
            variant="outlined"
            size="small"
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p style={{ color: "#344054" }} className="left">
                CVV
              </p>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      border: "1px solid #000000",
                      borderRadius: "8px",
                      height: "47px",
                      color: "#667085",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      border: "1px solid #000000 ",
                      color: "#667085",
                    },
                  },
                }}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <p style={{ color: "#344054" }} className="left">
                Expiration Date
              </p>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#667085",
                    fontFamily: "Montserrat",
                  }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#000000",
                      border: "1px solid",
                      borderRadius: "8px",
                      height: "47px",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#000000",
                      border: "1px solid",
                    },
                  },
                }}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Divider
            style={{
              color: "black ",
              marginTop: "10px ",
              width: "100%",
              justifyContent: "center",
              marginLeft: "0px ",
              borderBottom: "1px solid black",
            }}
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "Red !important",
              backgroundColor: "white !important",
              marginTop: "20px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClosee}
          >
            Cancel
          </Button>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              marginTop: "10px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={NavigateReceipt}
          >
            Pay
          </Button>
        </Box>
      </Modal>

      <Modal
        open={openConfirmPayment}
        onClose={handleCloseConfirmPayment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleConfirmPayment}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "black",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Enter payment details
          </p>
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "43px",
              marginBottom: "10px",
              borderRadius: "8px",
              marginTop: "30px",
            }}
          >
            <Grid container>
              <Grid item xs={1}>
                <img
                  style={{ marginTop: "13px", marginLeft: "5px" }}
                  src={Plus}
                  alt=""
                  onClick={handleOpenNewPayment}
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
                  onClick={handleOpenNewPayment}
                >
                  Add debit card
                </h4>
              </Grid>
              <Grid item xs={1}>
                <img
                  style={{ marginTop: "13px" }}
                  src={Right}
                  alt=""
                  onClick={handleOpenNewPayment}
                ></img>
              </Grid>
            </Grid>
          </Card>
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "43px",
              marginBottom: "10px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            <Grid container>
              <Grid item xs={1}>
                <img
                  style={{ marginTop: "13px", marginLeft: "5px" }}
                  src={Plus}
                  alt=""
                  onClick={handleOpenNewPayment}
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
                  onClick={handleOpenNewPayment}
                >
                  Add debit card
                </h4>
              </Grid>
              <Grid item xs={1}>
                <img
                  style={{ marginTop: "13px" }}
                  src={Right}
                  alt=""
                  onClick={handleOpenNewPayment}
                ></img>
              </Grid>
            </Grid>
          </Card>
          <Divider
            style={{
              color: "black ",
              marginTop: "10px ",
              width: "100%",
              justifyContent: "center",
              marginLeft: "0px ",
              borderBottom: "1px solid black",
            }}
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "Red !important",
              backgroundColor: "white !important",
              marginTop: "20px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseConfirmPayment}
          >
            Cancel
          </Button>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              marginTop: "10px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={NavigateReceipt}
          >
            Pay
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ConsumerOrderItems;
