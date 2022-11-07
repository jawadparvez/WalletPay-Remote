import React from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Modal } from "@material-ui/core";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Sliderr from "../../../Assets/Images/Slider.svg";
import { useNavigate } from "react-router-dom";
import CheckSuccess from "../../../Assets/Images/CheckSuccess.png";
import CircleChecked from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import Right from "../../../Assets/Images/right.png";
import VISA from "../../../Assets/Images/visa.png";
import Plus from "../../../Assets/Images/plus.png";

const Input = styled(MuiInput)`
  width: 50%;
`;

function Tips() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opene, setOpene] = React.useState(false);
  const handleOpene = () => setOpene(true);
  const handleClosee = () => setOpene(false);
  const [opening, setOpening] = React.useState(false);
  const handleOpening = () => setOpening(true);
  const handleCloseing = () => setOpening(false);
  const [openeing, setOpeneing] = React.useState(false);
  const handleOpeneing = () => setOpeneing(true);
  const handleClosing = () => setOpeneing(false);
  const [openeingg, setOpeneingg] = React.useState(false);
  const handleOpeneingg = () => setOpeneingg(true);
  const handleClosingg = () => setOpeneingg(false);
  const [openingg, setOpeningg] = React.useState(false);
  const handleOpeningg = () => setOpeningg(true);
  const handleCloseingg = () => setOpeningg(false);

  function handleOpenClose() {
    handleOpen();
    handleClosee();
  }
  function handleOpenClose2() {
    handleOpeneingg();
    handleCloseing();
  }

  function handleOpenClose3() {
    handleOpeningg();
    handleClosingg();
  }

  const stylee = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "43%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "450px",
    bgcolor: "white",
    border: "1px solid #000000",
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
    top: "32%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "265px",
    bgcolor: "white",
    border: "1px solid #000000",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };
  const styling = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "325px",
    bgcolor: "white",
    border: "1px solid #000000",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };
  const stylingSuccess = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "365px",
    bgcolor: "white",
    border: "1px solid #000000",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };
  const stylingModal = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "54%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "630px",
    bgcolor: "white",
    border: "1px solid #000000",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };

  const [value, setValue] = React.useState(10000);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1000000) {
      setValue(1000000);
    }
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
                marginLeft: "10px",
                padding:"0px",
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
              marginTop: "5px",
            }}
          >
            Tips
          </h3>
        </Grid>
      </Grid>
      <Card
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          marginRight: "10px",
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "80px",
          borderRadius: "8px",
        }}
        onClick={handleOpening}
      >
        <Grid container>
          <Grid item xs={6}>
            <h4 className="bolder text-color">Tips Balance</h4>
          </Grid>
          <Grid item xs={5}>
            <h4
              style={{ textAlign: "right", marginRight: "10px" }}
              className="balance-value"
            >
              $0.00
            </h4>
          </Grid>
          <Grid item xs={1}>
            <img className="right-icon" src={Right} alt=""></img>
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
              onClick={handleOpene}
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
              onClick={handleOpene}
            >
              Add debit card
            </h4>
          </Grid>
          <Grid item xs={1}>
            <img
              style={{ marginTop: "13px" }}
              src={Right}
              alt=""
              onClick={handleOpene}
            ></img>
          </Grid>
        </Grid>
      </Card>
      <Card
        id="disabled-role"
        style={{
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "43px",
          marginBottom: "10px",
          borderRadius: "8px",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={1}>
            <img style={{ marginTop: "13px" }} src={Plus} alt="" />
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
            >
              Add bank account
            </h4>
          </Grid>
          <Grid item xs={1}>
            <img style={{ marginTop: "13px" }} src={Right} alt=""></img>
          </Grid>
        </Grid>
      </Card>
      {/* <Modal
        open={opene}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
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
          </Grid>

          <Button
            fullWidth
            className="button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "40px!important !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Add
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClosee}
            // onClick={handleClickkk}
          >
            Back
          </Button>
        </Box>
      </Modal> */}
      <Modal
        open={opene}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
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
            Card Number
          </p>
          <div style={{position:'relative'}}>
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
            <img
              style={{ position: "absolute", right: "14px", top: "10px" }}
              src={VISA}
            />
          </div>

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
          </Grid>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "40px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleOpenClose}
          >
            Add
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClosee}
            // onClick={handleClickkk}
          >
            Back
          </Button>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p
            style={{
              color: "#0077FF",
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "200px",
            }}
          >
            Plain bank linking screen
          </p>
        </Box>
      </Modal>
      <Modal
        open={opening}
        onClose={handleCloseing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card
            style={{
              marginTop: "20px",

              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={5}>
                <h4 className="bolder text-color">Tip Balance</h4>
              </Grid>
              <Grid item xs={6}>
                <h4
                  style={{ textAlign: "right", marginRight: "10px" }}
                  className="balance-value"
                >
                  $0.00
                </h4>
              </Grid>
              <Grid item xs={1}>
                <img className="right-icon" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "40px!important ",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleOpenClose2}
          >
            Transfer
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseing}
            // onClick={handleClickkk}
          >
            Back
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openeing}
        onClose={handleClosing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styling}>
          <Card
            style={{
              marginTop: "20px",

              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <h4 className="bolder text-color">Walls Fargo Debit</h4>
              </Grid>
              <Grid item xs={4}>
                <h4 className="balance-value">****5647</h4>
              </Grid>
            </Grid>
          </Card>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#FF1F00 !important",
              borderColor: "black !important",
              marginTop: "40px!important !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Remove
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClosing}
            // onClick={handleClickkk}
          >
            Replace
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClosing}
            // onClick={handleClickkk}
          >
            Back
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openeingg}
        onClose={handleClosingg}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylingModal}>
          <p
            style={{ textAlign: "center", fontSize: "16px", fontWeight: "600" }}
          >
            Amount
          </p>
          <h4
            style={{
              textAlign: "center",
              fontSize: "24px",
              marginTop: "5px",
              marginLeft: "10%",
              textDecoration: "underline",
            }}
          >
            $
            <Input
              disableUnderline
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
                border: "0px",
                textDecoration: "underline",
              }}
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 1000000,
                textAlign: "center",
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </h4>

          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            sx={{
              "& .MuiSlider-thumb": {
                height: 18,
                width: 18,
                backgroundColor: "#fff",
              },
            }}
            min={0}
            step={0.01}
            stepMultiplier={0}
            max={100000}
            aria-labelledby="input-slider"
          />
          <img
            style={{
              position: "absolute",
              marginLeft: "-317px",
              marginTop: "35px",
              width: "315px",
            }}
            src={Sliderr}
            alt=""
          />

          <p style={{ fontSize: "12px", fontWeight: "500", marginTop: "40px" }}>
            Transfer Method
          </p>
          <Grid container>
            <Grid item xs={1}>
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
                style={{
                  textAlign: "left !important",
                  marginLeft: "-10px",
                  marginTop: "30px",
                }}
              />
            </Grid>
            <Grid item xs={11}>
              <h4
                style={{
                  marginBottom: "0px",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "black",
                  marginTop: "23px",
                }}
              >
                Fast Arrival
              </h4>
              <p
                style={{
                  marginTop: "0px",
                  fontSize: "12px",
                  marginBottom: "30px",
                }}
              >
                Transfer funds from <strong>WALLET/</strong>
                <span style={{ fontStyle: "italic", color: "#54C242" }}>
                  PAY
                </span>{" "}
                to account ending in 9467. Expected arrival within 2 hours.
                $100,000 limit per day. 5.99
                <strong style={{ marginLeft: "4px" }}>fee</strong>.
              </p>
            </Grid>
            <Grid item xs={1}>
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
                style={{
                  textAlign: "left !important",
                  marginLeft: "-10px",
                  marginTop: "10px",
                }}
              />
            </Grid>
            <Grid item xs={11}>
              <h4
                style={{
                  marginBottom: "0px",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                Standard Arrival
              </h4>
              <p
                style={{
                  marginTop: "0px",
                  fontSize: "12px",
                  marginBottom: "30px",
                }}
              >
                Transfer funds from <strong>WALLET/</strong>
                <span style={{ fontStyle: "italic", color: "#54C242" }}>
                  PAY
                </span>{" "}
                to account ending in 9467. Expected arrival within 2 -3 business
                days. No daily limit.
              </p>
            </Grid>
          </Grid>

          <Button
            fullWidth
            className="button"
            sx={{
              color: "White !important",
              marginTop: "55px !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleOpenClose3}
            // onClick={handleClickkk}
          >
            Transfer
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClosingg}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openingg}
        onClose={handleCloseingg}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylingSuccess}>
          <img
            style={{ marginLeft: "120px", marginTop: "30px" }}
            src={CheckSuccess}
            alt=""
          />
          <p
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginTop: "10px",
              color: "#0166FF",
            }}
          >
            Who-hoo!
          </p>
          <p
            style={{ fontSize: "16px", fontWeight: "600", textAlign: "center" }}
          >
            Money Transfered <br /> Confirmation #002319
          </p>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "40px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseingg}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Tips;