import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Grid } from "@mui/material";
import Right from "../../../Assets/Images/right.png";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import TextField from "@mui/material/TextField";
import { Divider } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Link as DOMLink} from "react-router-dom";
import Link from "@material-ui/core/Link";
import RightWhite from "../../../Assets/Images/rightwhite.png"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import "./tablemanager.css";


//Select Menu options styling
const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      border:'1px solid black',
      right:"30%",
      borderRadius:"8px",
      maxHeight: 210,
      width: 150,
    },
  },
};

//static options for server selection
const names = ["NO SERVER", "OLIVIA J", "ANDRE T", "CHASE G"];

function TableManager() {
  const [value, setValue] = useState("1");
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
  };

  //Declaration and fetching table
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


  //declaration and fetch guest 
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
  },[]);

  //Open Modal for selecting option of adding or removing table 
  const [openAddRemoveTable, setOpenAddRemoveTable] = useState(false);
    const handleOpenAddRemoveTable = () => setOpenAddRemoveTable(true);
    const handleCloseAddRemoveTable = () => setOpenAddRemoveTable(false);
  
  // Modal for Selecting and Opening tableSizer
  const [openTableSizer, setOpenTableSizer] = useState(false);
    const handleOpenTableSizer = () => setOpenTableSizer(true);
    const handleCloseTableSizer = () => setOpenTableSizer(false);

  //Modal declaration to add table to tableamanger
  const [openAddTable, setOpenAddTable] = useState(false);
    const handleOpenAddTable = () => setOpenAddTable(true);
    const handleCloseAddTable = () => setOpenAddTable(false);

  //Modal remove table
  const [openRemoveTable, setOpenRemoveTable] = useState(false);
    const handleOpenRemoveTable = () => setOpenRemoveTable(true);
    const handleCloseRemoveTable = () => setOpenRemoveTable(false);

  //Modal add seats to tables
  const [openAddTableSizer, setOpenAddTableSizer] = useState(false);
    const handleOpenAddTableSizer = () => setOpenAddTableSizer(true);
    const handleCloseAddTableSizer = () => setOpenAddTableSizer(false);
  
  // Add Guest to the party manager
  const [openAddGuest, setOpenAddGuest] = useState(false);
    const handleOpenAddGuest = () => setOpenAddGuest(true);
    const handleCloseGuest = () => setOpenAddGuest(false);
  
  //Modal to remove Guest
  const [openRemoveGuest, setOpenRemoveGuest] = useState(false);
    const handleOpenRemoveGuest = () => setOpenRemoveGuest(true);
    const handleCloseRemoveGuest = () => setOpenRemoveGuest(false);

  // handle table add modal
  function handleOpenTableAddModal() {
    handleOpenAddTable();
    handleCloseAddRemoveTable();
  }

  //remove to table modal
  function handleOpenTableRemoveModal() {
    handleOpenRemoveTable();
    handleCloseAddRemoveTable();
  }

  //
  function handleOpenTableSizerModal() {
    handleOpenAddTableSizer();
    handleCloseTableSizer();
  }

  const [tableToAdd, setTableToAdd] = useState()
  function handleAddTables () {
    for (var i = 0; i < tableToAdd; i++) {
      handleAddTable();
    }
    handleCloseAddTable();
  }

  const [addtable, setAddtable] = useState({
    time: "00:00:00",
    seats: 0,
    status: "OPEN",
    server: ""
  });

  function handleAddTable() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(addtable);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://jawad-fake-server-app.herokuapp.com/table", requestOptions)
      .then((response) => response.text())
      .then((result) => fetchtable())
      .catch((error) => console.log("error", error));
  }

   const deletetable = [];
   const [isChecked, setisChecked] = useState([]);
   const handleCheckbox = (e) => {
     const { value, checked } = e.target;
     if (checked && check(deletetable, value)) {
       deletetable.push(value);
       console.log(deletetable);
     } else if (!checked && !check(deletetable, value)) {
       var index = deletetable.indexOf(value);
       deletetable.splice(index, 1);
       console.log(deletetable);
     }
   };

   const [seatarray, setSeatarray] = useState({
     id: 0,
     time: "00:00:00",
     seats: 0,
     status: "OPEN",
   });

     const [tableSeatsToAdd, setTableSeatsToAdd] = useState();
           const addTableSeats = [];
           const handleSeatsCheckbox = (e) => {
             const { value, checked } = e.target;
             if (checked && check(addTableSeats, value)) {
               addTableSeats.push(value);
               console.log(addTableSeats);
             } else if (!checked && !check(addTableSeats, value)) {
               var index = addTableSeats.indexOf(value);
               addTableSeats.splice(index, 1);
               console.log(addTableSeats);
             }
           };

     function handleAddTablesSeats() {
      if (!tableSeatsToAdd && addTableSeats <= 0) {
        console.log("nothing is selected to be added");
      } else {
        for (var i = 0; i < addTableSeats.length; i++) {
          handleTableSeats(addTableSeats[i]);
        }
      }
       handleCloseAddTableSizer();
     }

   function check(a, name) {
     if (a.indexOf(name) != -1) {
       return false;
     } else {
       return true;
     }
   }

    function submitHandleTable() {
      if (deletetable.length <= 0) {
        console.log("You haven't selected anything to delete");
      } else {
        for (var i = 0; i < deletetable.length; i++)
          deleteTable(deletetable[i]);
      }
      handleCloseRemoveTable();
    }

    function deleteTable(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
    };

  fetch("https://jawad-fake-server-app.herokuapp.com/table/" + id, requestOptions)
  .then((response) => response.text())
  .then((result) => fetchtable())
  .catch((error) => console.log("error", error));
    }

        function handleTableSeats(id) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify(seatarray);

          var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(
            "https://jawad-fake-server-app.herokuapp.com/table/" +id,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => fetchtable())
            .catch((error) => console.log("error", error));
        }

    var [tablearray, setTablearray] = useState({
      id: 0,
      time: "",
      seats: 0,
      status: "",
      server:"",
    });

      const [personName, setPersonName] = React.useState([]);
      const [pname, setpname] = React.useState();

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
            handleTS(event.target.name,value);      
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
    time:"00:00:00",
    party:"",
    cellphone:""
  });

  function handleAddGuest(){
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
      handleCloseGuest();
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
    handleCloseRemoveGuest();
      }

  const styleAddRemoveTable = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "32%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "290px",
    bgcolor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };
  const styleTableSizer = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "48%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "540px",
    bgcolor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };
  const styleAddTable = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "39%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "400px",
    bgcolor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };
  const styleGuestDetails = {
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

    //Navigation
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
            indicatorColor="primary"
            aria-label="lab API tabs example"
            sx={{
              "& .Mui-selected": {
                color: "#0077FF !important",
                borderBottom: "#0077FF",
              },
            }}
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
              label="Orders"
              value="3"
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
                  marginLeft: "-12px!important",
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
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF !important",
                  marginLeft: "-12px!important",
                  backgroundColor: "white !important",
                  borderColor: "black !important",
                  borderRadius: "8px !important",
                  marginTop: "0px !important",
                  fontWeight: "500 !important",
                  border: "1px solid black !important",
                  fontFamily: "Montserrat !important",
                  width: "95px !important",
                  height: "40px !important",
                  textTransform: "capitalize !important",
                }}
                variant="contained"
                onClick={handleOpenTableSizer}
                // onClick={handleClickkk}
              >
                TSizer
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF !important",
                  marginLeft: "-12px!important",
                  backgroundColor: "white !important",
                  borderColor: "black !important",
                  borderRadius: "8px !important",
                  marginTop: "0px !important",
                  marginBottom: "20px !important",
                  fontWeight: "500 !important",
                  border: "1px solid black !important",
                  fontFamily: "Montserrat!important",
                  width: "100px !important",
                  height: "40px !important",
                  textTransform: "capitalize",
                }}
                variant="contained"
                onClick={handleOpenAddRemoveTable}
              >
                -/+ Table
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <span className="center-t-table color">Table</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-c">Time</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-seats">Seats</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-status">Status</span>
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
                  marginLeft: "-10px",
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
                        marginLeft: "5px",
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
                        marginLeft: "20px",
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
                        marginTop: "1.5px",
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
                      sx={{
                        height: "19px",
                        marginTop: "1.5px!important",
                        marginLeft: "-2px",
                        borderRadius: "8px",
                        backgroundColor: "#0077FF",
                        fontSize: "12px",
                        color: "white ",
                        textAlign: "left",
                        ".MuiSvgIcon-root ": {
                          fill: "white !important",
                        },
                      }}
                      IconComponent={ExpandMoreIcon}
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
                                  marginTop: "-12px ",
                                  padding: "0px",
                                }}
                                checked={personName.indexOf(name) > -1}
                              />
                            </Grid>
                            <Grid item xs={8}>
                              <ListItemText
                                style={{
                                  textAlign: "left ",
                                  marginTop: "-5px ",
                                  fontSize: "10px",
                                  padding: "0px",
                                  color: "#0077FF",
                                  marginLeft: "0px ",
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
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Card
                style={{
                  marginTop: "10px",
                  marginLeft: "-10px",
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
                onClick={handleOpenAddGuest}
              >
                <h4 style={{ fontSize: "19px", marginTop: "21px" }}>+ Guest</h4>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}>
              <span className="center-t-number">#</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-name">Name</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-timetab">Time</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-party">Party</span>
            </Grid>
            <Grid item xs={5}>
              <span className="center-t-cellphonenumber">Cell Number</span>
            </Grid>
          </Grid>

          {guest.map((gue, index) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  marginLeft: "-10px",
                  marginBottom: "5px",
                  height: "24px",
                  borderRadius: "8px",
                }}
                onClick={handleOpenRemoveGuest}
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
                        marginLeft: "5px",
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
                        marginLeft: "0px",
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
                        marginLeft: "11px",
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
        <TabPanel value="3">
          <DOMLink style={{ textDecoration: "none" }} to="/tabhistory">
            <Card
              style={{
                marginTop: "0px",
                marginLeft: "-10px",
                border: "1px solid black",
                fontFamily: "Montserrat",
                height: "70px",
                borderRadius: "8px",
              }}
            >
              <Grid container>
                <Grid item xs={11}>
                  <h4
                    style={{ fontWeight: "600", marginTop: "18px" }}
                    className="bolder-text-modal "
                  >
                    Tab History
                  </h4>
                </Grid>
                <Grid item xs={1}>
                  <img
                    style={{ marginTop: "26px" }}
                    className="right-icon-modal"
                    src={Right}
                    alt=""
                  ></img>
                </Grid>
              </Grid>
            </Card>
          </DOMLink>
          <h4
            style={{
              fontSize: "13px",
              fontWeight: "500",
              textAlign: "left",
              marginTop: "10px",
              marginLeft: "-10px",
            }}
          >
            Current Table Orders
          </h4>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <span className="center-t-table color">Table</span>
            </Grid>
            <Grid item xs={3}>
              <span className="center-t-time">Time</span>
            </Grid>
            <Grid item xs={3}>
              <span className="center-t-tableserver">Server</span>
            </Grid>
            <Grid item xs={4}>
              <span className="center-t-cellOrder">Order</span>
            </Grid>
          </Grid>

          {table.map((tab, index) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  marginLeft: "-10px",
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
                          marginTop: "0px",
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
                  <Grid item xs={3}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "15px",
                        display: "flex",
                      }}
                    >
                      {tab.time}
                    </span>
                  </Grid>
                  <Grid item xs={3}>
                    <span
                      style={{
                        textAlign: "center",
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "-10px",
                        color: "#0077FF",
                      }}
                    >
                      {tab.server}
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      endIcon={
                        <img
                          style={{ marginLeft: "10px" }}
                          src={RightWhite}
                          alt=""
                        />
                      }
                      sx={{
                        height: "19px !important",
                        marginTop: "0px !important",
                        marginLeft: "-2px !important",
                        backgroundColor: "#0077FF !important",
                        fontSize: "12px !important",
                        color: "white !important",
                        fontWeight: "400 !important",
                        textAlign: "left !important",
                        borderRadius: "10px !important",
                        fontFamily: "Montserrat !important",
                        textTransform: "capitalize !important",
                      }}
                    >
                      Table Order
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </TabPanel>
      </TabContext>

      <Modal
        open={openAddRemoveTable}
        onClose={handleCloseAddRemoveTable}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleAddRemoveTable}>
          <p style={{ marginTop: "10px" }} className="center">
            -/+ Table
          </p>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "60px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <h4
                  className="bolder-text-modal "
                  onClick={handleOpenTableAddModal}
                >
                  Add Table
                </h4>
              </Grid>
              <Grid item xs={1}>
                <img className="right-icon-modal" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "60px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <h4
                  className="bolder-text-modal"
                  onClick={handleOpenTableRemoveModal}
                >
                  Remove Table
                </h4>
              </Grid>

              <Grid item xs={1}>
                <img className="right-icon-modal" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>

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
            onClick={handleCloseAddRemoveTable}
          >
            Back
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openTableSizer}
        onClose={handleCloseTableSizer}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleTableSizer}>
          <p className="center">Table Sizer</p>
          <Grid container>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
          </Grid>
          <div style={{ height: "340px", overflow: "scroll" }}>
            <Grid container spacing={0}>
              {table.map((tab, index) => {
                return (
                  <div>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Card
                            style={{
                              border: "1px solid black",
                              fontFamily: "Montserrat",
                              marginTop: "5px",
                              marginBottom: "10px",
                              marginLeft: "2px",
                              height: "20px",
                              width: "50px",
                              borderRadius: "8px",
                            }}
                          >
                            <span
                              style={{
                                marginTop: "0px",
                                fontSize: "14px",
                                fontWeight: "600",
                                marginLeft: "20px",
                                display: "flex",
                              }}
                            >
                              {tab.id}
                            </span>
                          </Card>
                        </Grid>
                        <Grid item xs={3}>
                          <input
                            style={{
                              marginTop: "2px",
                              marginLeft: "40px",
                              marginRight: "0px",
                              border: "0px",
                              fontSize: "17px",
                              fontWeight: "500",
                              display: "flex",
                              width: "50px",
                              paddingRight: "10px",
                              textAlign: "right",
                            }}
                            disabled
                            type={"number"}
                            value={tab.seats}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider
                      style={{
                        background: "gray",
                        color: "black",
                        width: "96%",
                      }}
                    />
                  </div>
                );
              })}
            </Grid>
          </div>
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
            onClick={handleOpenTableSizerModal}
          >
            Edit
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
            onClick={handleCloseTableSizer}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openAddTable}
        onClose={handleCloseAddTable}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleAddTable}>
          <p className="center">+ Table</p>
          <input
            type={"number"}
            className="center-textInput"
            value={tableToAdd} //setting the value of the form to the props value
            onChange={
              (e) => setTableToAdd(e.target.value) //setting the formData to the value input of the textfield
            }
          />
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
          <h1 className="center-heading-modal">
            Enter number of tables above.
          </h1>

          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              marginTop: "20px",
              marginBottom: "15px",
              marginLeft: "110px",
              height: "25px",
              width: "100px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                marginTop: "0px",
                fontSize: "16px",
                fontWeight: "600",
                marginLeft: "40px",
                display: "flex",
              }}
            >
              16
            </span>
          </Card>
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              marginTop: "4px",
              marginBottom: "15px",
              marginLeft: "110px",
              height: "25px",
              width: "100px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                marginTop: "0px",
                fontSize: "16px",
                fontWeight: "600",
                marginLeft: "40px",
                display: "flex",
              }}
            >
              17
            </span>
          </Card>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "30px!important !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={
              () => handleAddTables() //setting the formData to the value input of the textfield
            }
          >
            Add
          </Button>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "gray !important",
              backgroundColor: "white !important",
              borderColor: "black !important",
              marginTop: "10px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseAddTable}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openRemoveTable}
        onClose={handleCloseRemoveTable}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleTableSizer}>
          <p
            style={{ marginTop: "10px", marginBottom: "20px" }}
            className="center"
          >
            Select which tables to remove
          </p>
          <Grid container>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "10px" }}>seats</p>
            </Grid>
          </Grid>
          <div style={{ height: "320px", overflow: "scroll" }}>
            <Grid container spacing={0}>
              {table.map((tab, index) => {
                return (
                  <div>
                    <Grid item xs={6}>
                      <Card
                        style={{
                          border: "1px solid black",
                          fontFamily: "Montserrat",
                          marginLeft: "5px",
                          marginBottom: "5px",
                          height: "30px",
                          width: "150px",
                          borderRadius: "8px",
                        }}
                      >
                        <Grid container spacing={0}>
                          <Grid item xs={4}>
                            <Checkbox
                              icon={<CircleUnchecked />}
                              checkedIcon={<CircleCheckedFilled />}
                              sx={{
                                marginTop: "1px !important ",
                                marginLeft: "5px !important ",
                              }}
                              value={tab.id}
                              checked={tab.isChecked}
                              onChange={(e) => {
                                handleCheckbox(e);
                              }}
                            ></Checkbox>
                          </Grid>

                          <Grid item xs={6}>
                            <Card
                              style={{
                                border: "1px solid black",
                                fontFamily: "Montserrat",
                                marginTop: "4px",
                                marginBottom: "15px",
                                marginLeft: "2px",
                                height: "20px",
                                width: "50px",
                                borderRadius: "8px",
                              }}
                            >
                              <span
                                style={{
                                  marginTop: "0px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  marginLeft: "20px",
                                  display: "flex",
                                }}
                              >
                                {tab.id}
                              </span>
                            </Card>
                          </Grid>
                          <Grid item xs={1}>
                            <span
                              style={{
                                marginTop: "2px",
                                fontSize: "17px",
                                fontWeight: "500",
                                marginLeft: "0px",
                                display: "flex",
                              }}
                            >
                              {tab.seats}
                            </span>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
          </div>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#FF1F00 !important",
              borderColor: "black !important",
              marginTop: "30px!important",
              borderRadius: "8px !important",
              textAlign: "flex-end !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={submitHandleTable}
          >
            Remove
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
            onClick={handleCloseRemoveTable}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openAddTableSizer}
        onClose={handleCloseAddTableSizer}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleTableSizer}>
          <p className="center">Table Sizer</p>
          <input
            type={"number"}
            className="center-textInput"
            //setting the value of the form to the props value
            onChange={
              (e) => setSeatarray({ ...seatarray, seats: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
          <Divider
            style={{
              color: "black",
              marginTop: "0px",
              width: "30%",
              justifyContent: "center!important",
              marginLeft: "110px",
              border: "1px solid black",
            }}
          />
          <h1 className="center-heading-modal">
            Enter number of tables above.
          </h1>
          <Grid container>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
          </Grid>
          <div style={{ overflow: "scroll", height: "180px" }}>
            <Grid container spacing={0}>
              {table.map((tab, index) => {
                return (
                  <div>
                    <Card
                      style={{
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        marginLeft: "10px",
                        marginBottom: "5px",
                        height: "30px",
                        width: "148px",
                        borderRadius: "8px",
                      }}
                    >
                      <Grid style={{ display: "flex" }} container>
                        <Grid item xs={4}>
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            sx={{
                              marginTop: "1px !important",
                              marginLeft: "5px !important",
                            }}
                            value={tab.id}
                            checked={tab.isChecked}
                            onChange={(e) => {
                              handleSeatsCheckbox(e);
                            }}
                          ></Checkbox>
                        </Grid>

                        <Grid item xs={6}>
                          <Card
                            style={{
                              border: "1px solid black",
                              fontFamily: "Montserrat",
                              marginTop: "4px",
                              marginBottom: "15px",
                              marginLeft: "2px",
                              height: "20px",
                              width: "50px",
                              borderRadius: "8px",
                            }}
                          >
                            <span
                              style={{
                                marginTop: "0px",
                                fontSize: "14px",
                                fontWeight: "600",
                                marginLeft: "20px",
                                display: "flex",
                              }}
                            >
                              {tab.id}
                            </span>
                          </Card>
                        </Grid>
                        <Grid item xs={1}>
                          <span
                            style={{
                              marginTop: "2px",
                              fontSize: "17px",
                              fontWeight: "500",
                              marginLeft: "0px",
                              display: "flex",
                            }}
                          >
                            {tab.seats}
                          </span>
                        </Grid>
                      </Grid>
                    </Card>
                  </div>
                );
              })}
            </Grid>
          </div>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "60px!important",
              borderRadius: "8px !important",
              textAlign: "flex-end !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleAddTablesSeats}
          >
            Apply
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
            onClick={handleCloseAddTableSizer}
          >
            Cancel
          </Button>
        </Box>
      </Modal>

      <Modal
        open={openAddGuest}
        onClose={handleCloseGuest}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleGuestDetails}>
          <p className="left">Name</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
                "& > placeholder": {
                  fontWeight: "900",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
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
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
                "& > placeholder": {
                  fontWeight: "900",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
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
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
                "& > placeholder": {
                  fontWeight: "900",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
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
            onClick={handleCloseGuest}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openRemoveGuest}
        onClose={handleCloseRemoveGuest}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleGuestDetails}>
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
            onClick={handleCloseRemoveGuest}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TableManager;
