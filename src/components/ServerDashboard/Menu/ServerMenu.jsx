import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Right from "../../../Assets/Images/right.png";
import Grid from "@mui/material/Grid";
import BlackArrow from "../../../Assets/Images/blackarrow.png";

import "./menu.css";
import { useNavigate } from "react-router-dom";

function ServerMenu() {

  const [opennnn, setOpennnn] = useState(false);
  const handleOpennnn = () => setOpennnn(true);
    const handleCloseeee = () => setOpennnn(false);


  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);

  function fetchcat() {
    fetch("https://jawad-fake-server-app.herokuapp.com/categoryy")
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
        if (result.length) {
          setWtext("hidden");
        }
        console.log("Categories are being displayed from the database");
      });
  }
  useEffect(() => {
    fetchcat();
  }, []);

  function fetchitem() {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("Items are being retrieved from the database");
      });
  }
  useEffect(() => {
    fetchitem();
  }, []);

    const [show, setShow] = useState(true);
    const [showe, setShowe] = useState(false);
      function onClickShow() {
        setShow(!show);
        setShowe(!showe);
      }


  const [value, setValue] = useState("1");
  const [wtext, setWtext] = useState("");
  const [selectedtab, setSelectedtab] = useState();
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
    setSelectedtab(event.target.ariaPlaceholder);
  };

  const [valuee, setValuee] = React.useState(0);

  const [itemarray, setItemarray] = useState({
    id: 0,
    name: "",
    category: 0,
    price: "",
    description: "",
  });
  function handleitem(e) {
    for (var i = 0; i < item.length; i++) {
      if (item[i].id == e.target.ariaPlaceholder) {
        setItemarray(item[i]);
      }
    }
    handleOpennnn();
  }
 let navigate = useNavigate();
  function handleClick() {
    navigate("/TabAndTip")
  }

  const styl = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "50%",
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

      function handleClickk() {
        navigate(-1);
      }
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Link onClick={handleClickk}>
            <img
              style={{
                marginTop: "15px",
                marginLeft: "-10px",
                AlignItems: "left",
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
            Menu
          </h3>
        </Grid>
      </Grid>
      {show ? (
        <>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                sx={{
                  marginTop: "20px",
                  "& .Mui-selected": {
                    color: "#0077FF !important",
                    borderBottom: "#0077FF",
                  },
                }}
                value={valuee}
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="primary"
                textColor="primary"
                aria-label="lab API tabs example"
              >
                {category.map((cat, index) => {
                  return (
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
                      label={cat.name}
                      value={cat.id}
                      id="tab-id"
                      aria-placeholder={cat.id}
                      name="hi"
                    />
                  );
                })}
              </TabList>
            </Box>
            {category.map((cat, index) => {
              return (
                <TabPanel value={cat.id}>
                  {item.map((itm, index) => {
                    if (itm.category === cat.id) {
                      return (
                        <Card
                          style={{
                            border: "1px solid black",
                            fontFamily: "Montserrat",
                            height: "51px",
                            marginBottom: "10px",
                            borderRadius: "8px",
                          }}
                        >
                          <Grid container>
                            <Grid item xs={2}>
                              <Card
                                style={{
                                  border: "1px solid black",
                                  backgroundColor: "#D1E9FF",
                                  fontFamily: "Montserrat",
                                  width: "38px",
                                  height: "37px",
                                  marginTop: "6px",
                                  marginLeft: "5px",
                                  borderRadius: "100px",
                                }}
                              >
                                <p
                                  style={{
                                    textAlign: "center",
                                    marginTop: "8px",
                                    fontSize: "12px",
                                  }}
                                >
                                  FMS
                                </p>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <h4
                                style={{
                                  textAlign: "left",
                                  marginTop: "7px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                }}
                                onClick={onClickShow}
                              >
                                {itm.name}
                              </h4>
                            </Grid>
                            <Grid item xs={3}>
                              <h4
                                style={{
                                  textAlign: "right",
                                  marginTop: "7px",
                                  marginRight: "5px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                }}
                              >
                                {itm.price}
                              </h4>
                            </Grid>
                            <Grid item xs={1}>
                              <img
                                style={{ marginTop: "18px" }}
                                src={Right}
                                alt=""
                                aria-placeholder={itm.id}
                                onClick={(e) => {
                                  handleitem(e);
                                }}
                              ></img>
                            </Grid>
                          </Grid>
                        </Card>
                      );
                    }
                  })}
                </TabPanel>
              );
            })}
          </TabContext>
        </>
      ) : null}
      {showe ? (
        <>
          <div style={{marginRight:'20px'}}>
            <Card
              style={{
                border: "1px solid black",
                marginTop: "30px",
                height: "148px",
                marginLeft: "6%",
                borderRadius: "8px",
              }}
            >
              <Grid container>
                <Grid item xs={3}>
                  <Card
                    style={{
                      border: "1px solid black",
                      backgroundColor: "#D1E9FF",
                      fontFamily: "Montserrat",
                      width: "70px",
                      height: "70px",
                      marginTop: "33px",
                      marginLeft: "10px",
                      borderRadius: "100px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "20px",
                        fontSize: "15px",
                      }}
                    >
                      FMS
                    </p>
                  </Card>
                </Grid>
                <Grid item xs={9}>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginTop: "20px",
                      textAlign: "left",
                      marginLeft: "5px",
                      marginBottom: "0px",
                    }}
                  >
                    Italy 5 Cheese Dinner
                  </h4>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginLeft: "5px",
                      marginTop: "0px",
                    }}
                  >
                    $21.99
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "400",
                      marginLeft: "5px",
                      marginTop: "0px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscin
                  </p>
                </Grid>
              </Grid>
            </Card>
          </div>
          <p
            style={{
              textAlign: "left",
              fontSize: "15px",
              fontWeight: "600",
              marginLeft: "25px",
              marginTop: "20px",
            }}
          >
            Select 1st Side
          </p>
          <Grid container>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Ceaser Salad
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Fries
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Mashed Potatoes
                </p>
              </Card>
            </Grid>
          </Grid>

          <p
            style={{
              display: "flex",
              textAlign: "left",
              fontSize: "15px",
              fontWeight: "600",
              marginLeft: "25px",
              marginTop: "20px",
            }}
          >
            Select 2nd Side
          </p>
          <Grid container>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Ceaser Salad
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Fries
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  marginTop: "10px",
                  overflow: "scroll",
                  width: "95px",
                  marginLeft: "20px",
                  height: "54px",
                  borderRadius: "8px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                >
                  Mashed Potatoes
                </p>
              </Card>
            </Grid>
          </Grid>

          <TextField
            fullWidth
            sx={{
              marginLeft: "0px",
              width: "330px",
              marginTop: "70px",

              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid black",
                  borderRadius: "8px",
                  height: "95px",
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
            rows={5}
          />
          <Button
            fullWidth
            className="button"
            sx={{
              color: "White !important",
              marginTop: "70px !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
              marginLeft: "10px",
              width: "330px",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Add to Tab
          </Button>
        </>
      ) : null}

      <Modal open={opennnn} onClose={handleCloseeee}>
        <Box sx={styl}>
          <Card
            style={{
              border: "2px solid black",
              backgroundColor: "#D1E9FF",
              fontFamily: "Montserrat",
              width: "96px",
              height: "96px",
              marginTop: "20px",
              marginLeft: "108px",
              borderRadius: "100px",
              alignContent: "center",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginTop: "23px",
                fontSize: "24px",
              }}
            >
              FMS
            </h2>
          </Card>
          <p className="left">Item Name</p>
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
            value={itemarray.name}
            onChange={(e) =>
              setItemarray({ ...itemarray, name: e.target.value })
            }
          />
          <p className="left">Price</p>
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
            value={itemarray.price}
            onChange={(e) =>
              setItemarray({ ...itemarray, price: e.target.value })
            }
          />
          <p className="left">Description</p>
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
                  height: "95px",
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
            value={itemarray.description}
            onChange={(e) =>
              setItemarray({ ...itemarray, description: e.target.value })
            }
          />
          <Button
            fullWidth
            className="button"
            sx={{
              color: "White !important",
              marginTop: "70px !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseeee}
            // onClick={handleClickkk}
          >
            Back
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ServerMenu;
