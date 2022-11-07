import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Right from "../../../Assets/Images/right.png";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import "./tablemanager.css";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 210,
      width: 150,
    },
  },
};

const names = ["NO SERVER", "OLIVIA J", "ANDRE T", "CHASE G"];

function TableManager() {
  const [value, setValue] = useState("1");
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
  };

  const [personName, setPersonName] = React.useState([]);

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

  const [guest, setGuest] = useState([]);
  function fetchGuest() {
    fetch("https://jawad-fake-server-app.herokuapp.com/guests")
      .then((response) => response.json())
      .then((result) => {
        setGuest(result);
        console.log("guest has been retrieved");
      });
  }

  useEffect(() => {
    fetchGuest();
  }, []);


  const [opening, setOpening] = useState(false);
  const [openin, setOpenin] = useState(false);
  const handleOpening = () => setOpening(true);
  const handleClosing = () => setOpening(false);
  const handleOpenin = () => setOpenin(true);
  const handleClosin = () => setOpenin(false);

    var [tablearray, setTablearray] = useState({
      id: 0,
      time: "",
      seats: 0,
      status: "",
      server: "",
    });

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      for (var i = 0; i < table.length; i++) {
        if (table[i].id == event.target.name) {
          console.clear();
          console.log(event.target.name);
          tablearray = table[i];
          console.log(table[i]);
          handleTS(event.target.name, value);
        }
      }
    };

    function AddTableServer(id) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(tablearray);

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://jawad-fake-server-app.herokuapp.com/table/" + id,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => fetchtable())
        .catch((error) => console.log("error", error));
    }

    function handleTS(name, value) {
      tablearray.server = value;
      AddTableServer(name);
      console.log(tablearray);
    }


  

  const [guestname, setGuestname] = useState({
    name: "",
    time: "00:00:00",
    party: "",
    cellphone: "",
  });

  function handleAddGuest() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(guestname);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://jawad-fake-server-app.herokuapp.com/guests", requestOptions)
      .then((response) => response.text())
      .then((result) => fetchGuest())
      .catch((error) => console.log("error", error));

    handleClosing();
  }
  const [guestarray, setGuestarray] = useState({
    id: 0,
    name: "",
    time: "",
    party: "",
    cellphone: "",
  });
  function handleguest(e) {
    for (var i = 0; i < guest.length; i++) {
      if (guest[i].id == e.target.ariaPlaceholder) {
        setGuestarray(guest[i]);
      }
    }
  }
  function handleDeleteguest() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://jawad-fake-server-app.herokuapp.com/guests/" + guestarray.id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => fetchGuest())
      .catch((error) => console.log("error", error));
    handleClosin();
  }
  const styling = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "42%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "450px",
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

const [data, setData] = useState("No result");
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

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            sx={{
              "& .Mui-selected": {
                color: "#0077FF !important",
                borderBottom: "#0077FF",
              },
            }}
            indicatorColor="primary"
            aria-label="lab API tabs example"
          >
            <Tab
              style={{
                marginLeft: "10px",
                minWidth: "auto",
                fontFamily: "Montserrat",
                color: "#667085",
                fontSize: "15px",
                textTransform: "capitalize",
                padding: "0px",
              }}
              label="Table"
              value="1"
            />
            <Tab
              style={{
                marginLeft: "10px",
                minWidth: "auto",
                fontFamily: "Montserrat",
                color: "#667085",
                fontSize: "15px",
                textTransform: "capitalize",
                padding: "0px",
              }}
              label="Waitlist"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF !important",
                  marginLeft: "0px!important",
                  backgroundColor: "white !important",
                  borderRadius: "8px !important",
                  fontWeight: "500 !important",
                  marginTop: "0px !important",
                  border: "1px solid black !important",
                  fontFamily: "Montserrat !important",
                  width: "95px !important",
                  height: "40px !important",
                  textTransform: "capitalize !important",
                }}
                variant="contained"
              >
                QRcode
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <span className="center-t-c color">Table</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-c">Time</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-c">Seats</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-seats">Status</span>
            </Grid>
            <Grid item xs={4}>
              <span className="center-t-ser">Server</span>
            </Grid>
          </Grid>
          {table.map((tab, index) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  marginLeft: "0px!important",
                  marginBottom: "5px",
                  height: "24px",
                  borderRadius: "8px",
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
                    <Select
                      fullWidth
                      style={{
                        height: "19px",
                        marginTop: "2px",
                        marginLeft: "-2px",
                        borderRadius: "8px",
                        backgroundColor: "#0077FF",
                        fontSize: "12px",
                        color: "white ",
                        textAlign: "left",
                      }}
                      displayEmpty
                      labelId="demo-multiple-checkbox-label"
                      name={tab.id}
                      placeholder={tab.server}
                      value={personName}
                      onChange={handleChange}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return (
                            <p style={{ color: "white", marginLeft: "-5px" }}>
                              {tab.server}
                            </p>
                          );
                        }

                        return selected.join(", ");
                      }}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Grid container spacing={2}>
                            <Grid item xs={4}>
                              <Checkbox
                                icon={<CircleUnchecked />}
                                checkedIcon={<CircleChecked />}
                                style={{
                                  textAlign: "left ",
                                  marginLeft: "10px",
                                  marginTop: "0px ",
                                  paddingTop: "0px ",
                                  paddingBottom: "0px ",
                                }}
                                checked={personName.indexOf(name) > -1}
                              />
                            </Grid>
                            <Grid item xs={8}>
                              <ListItemText
                                style={{
                                  textAlign: "left ",
                                  marginTop: "0px ",
                                  fontSize: "10px",
                                  color: "#0077FF",
                                  marginLeft: "0px",
                                }}
                                primary={name}
                              />
                            </Grid>
                          </Grid>
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Card
                style={{
                  marginTop: "10px",
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "80px",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    marginTop: "8px",
                    marginBottom: "3px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  Current Wait Time
                </p>
                <p
                  style={{
                    marginTop: "4px",
                    marginBottom: "3px",
                    color: "#0077FF",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  17 Minutes
                </p>
                <p
                  style={{
                    marginTop: "3px",
                    fontWeight: "600",
                    fontSize: "10px",
                  }}
                >
                  (Party of 2+)
                </p>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card
                style={{
                  marginTop: "10px",
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "80px",
                  borderRadius: "8px",
                }}
                onClick={handleOpening}
              >
                <h4 style={{ fontSize: "19px", marginTop: "21px" }}>+ Guest</h4>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}>
              <span className="center-t-c">#</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-c">Name</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-r">Time</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-r">Party</span>
            </Grid>
            <Grid item xs={5}>
              <span className="center-t-cell">Cell Number</span>
            </Grid>
          </Grid>

          {guest.map((gue, index) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  marginLeft: "0px!important",
                  marginBottom: "5px",
                  height: "24px",
                  borderRadius: "8px",
                }}
                onClick={handleOpenin}
              >
                <Grid container>
                  <Grid item xs={1}>
                    <span
                      style={{
                        marginTop: "2px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "10px",
                        display: "flex",
                      }}
                    >
                      {gue.id}.
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "2px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "0px",
                        display: "flex",
                        color: "#0077FF",
                      }}
                    >
                      {gue.name}
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "10px",
                        display: "flex",
                      }}
                    >
                      {gue.time}
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "15px",
                      }}
                    >
                      {gue.party}
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "20px",
                      }}
                    >
                      {gue.cellphone}
                    </span>
                  </Grid>
                  <Grid item xs={1}>
                    <img
                      style={{ marginLeft: "0px", marginTop: "3px" }}
                      src={Right}
                      alt=""
                      aria-placeholder={gue.id}
                      onClick={(e) => {
                        handleguest(e);
                      }}
                    ></img>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </TabPanel>
      </TabContext>

      <Modal
        open={opening}
        onClose={handleClosing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styling}>
          <p className="left">Name</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
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
            label="Enter Name"
            variant="outlined"
            size="small"
            onChange={
              (e) => setGuestname({ ...guestname, name: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
          <p className="left">Cell Number</p>

          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
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
            label="Enter Number"
            variant="outlined"
            size="small"
            onChange={
              (e) => setGuestname({ ...guestname, cellphone: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
          <p className="left">Party Size</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
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
            label="Enter Party Size"
            variant="outlined"
            size="small"
            onChange={
              (e) => setGuestname({ ...guestname, party: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
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
            onClick={handleAddGuest}
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
            onClick={handleClosing}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openin}
        onClose={handleClosin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styling}>
          <p className="left">Name</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
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
            label="Enter Name"
            variant="outlined"
            size="small"
            value={guestarray.name}
          />
          <p className="left">Cell Number</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
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
            label="Enter Number"
            variant="outlined"
            size="small"
            value={guestarray.cellphone}
          />
          <p className="left">Party Size</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
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
            label="Enter Party Size"
            variant="outlined"
            size="small"
            value={guestarray.party}
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#FF1F00 !important",
              borderColor: "black !important",
              marginTop: "40px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleDeleteguest}
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
            onClick={handleClosin}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TableManager;
