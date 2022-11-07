import React, {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Card from "@mui/material/Card";
import { Checkbox, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Camera from "../../../Assets/Images/camera.png";
import Upload from "../../../Assets/Images/download.png";
import Right from "../../../Assets/Images/right.png";
import Grid from '@mui/material/Grid';
import { Divider } from '@material-ui/core';
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import "./menu.css";

function Menu() {
  //Declaration Create Category
  const [openCreateCat, setOpenCreateCat] = useState(false);
  const handleOpenCreateCat = () => setOpenCreateCat(true);
  const handleCloseCreateCat = () => setOpenCreateCat(false);

  //Declaration Remove Category
  const [openRemoveCat, setOpenRemoveCat] = useState(false);
  const handleOpenRemoveCat = () => setOpenRemoveCat(true);
  const handleCloseRemoveCat = () => setOpenRemoveCat(false);

  //Declaration Create Item
  const [openCreateItem, setOpenCreateItem] = useState(false);
  const handleOpenCreateItem = () => setOpenCreateItem(true);
  const handleCloseCreateItem = () => setOpenCreateItem(false);

  //Declaration Update Item
  const [openUpdateItem, setOpenUpdateItem] = useState(false);
  const handleOpenUpdateItem = () => setOpenUpdateItem(true);
  const handleCloseUpdateItem = () => setOpenUpdateItem(false);

  //Declaration Remove Item
  const [openRemoveItem, setOpenRemoveItem] = useState(false);
  const handleOpenRemoveItem = () => setOpenRemoveItem(true);
  const handleCloseRemoveItem = () => setOpenRemoveItem(false);

  //Open Remove Item Modal
  function handleOpenRemoveItemModal() {
    handleOpenRemoveItem();
    handleCloseUpdateItem();
  }

  //Declarting category and Item Variable
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);

  // Declare Navigation
  let navigate = useNavigate();

  //Fetch Category
  function fetchcat() {
    fetch("https://jawad-fake-server-app.herokuapp.com/categoryy")
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
        if (result.length) {
          setWtext("hidden");
          setBtext("");
        }
        console.log("Categories are being displayed from the database");
      });
  }
  useEffect(() => {
    fetchcat();
  }, []);

  //Fetch Items
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

  //Text to show on Empty Category
  const [wtext, setWtext] = useState("");

  //Buttons to hide on Empty category
  const [btext, setBtext] = useState("hidden");

  // Tab context Value
  const [value, setValue] = useState("1");

  //Selected tab and set value
  const [selectedtab, setSelectedtab] = useState();
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
    setSelectedtab(event.target.ariaPlaceholder);
  };

  //Posting Category Schema
  const [catergoryname, setCategoryname] = useState({
    name: "",
  });

  //Posting Data to Database
  function submitCreateCategory() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(catergoryname);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://jawad-fake-server-app.herokuapp.com/categoryy/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => fetchcat())
      .catch((error) => console.log("error", error));

    handleCloseCreateCat();
  }

  //Delete Category
  function submitRemoveCategory() {
    if (deletecat.length <= 0) {
      console.log("You haven't selected anything to delete");
    } else {
      for (var i = 0; i < deletecat.length; i++) deleteCategory(deletecat[i]);
    }
    navigate("/menu");
    handleCloseRemoveCat();
  }

  function deleteCategory(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(catergoryname);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://jawad-fake-server-app.herokuapp.com/categoryy/" + id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => fetchcat())
      .catch((error) => console.log("error", error));
  }

  //Posting Items to Database Schema
  const [itemname, setItemname] = useState({
    name: "",
    category: 0,
    price: "",
    description: "",
  });

  function submitCreateItem() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    itemname.category = parseInt(selectedtab);
    var raw = JSON.stringify(itemname);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://jawad-fake-server-app.herokuapp.com/item/", requestOptions)
      .then((response) => response.text())
      .then((result) => fetchitem())
      .catch((error) => console.log("error", error));

      handleCloseCreateItem();
  }

  //Update Item Data
  function handleItemPut() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(itemarray);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://jawad-fake-server-app.herokuapp.com/item/" + itemarray.id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => fetchitem())
      .catch((error) => console.log("error", error));

    handleCloseUpdateItem();
  }

  //Delete Item from database
  function handleItemDelete() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://jawad-fake-server-app.herokuapp.com/item/" + itemarray.id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => fetchitem())
      .catch((error) => console.log("error", error));

    handleCloseRemoveItem();
  }

  const [valueTabList, setValueTabList] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValueTabList(newValue);
  };

  // Delete Catergory Logic to handle all checkboxes and delete the relevant data
  const deletecat = [];

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked && check(deletecat, value)) {
      deletecat.push(value);
      console.log(deletecat);
    } else if (!checked && !check(deletecat, value)) {
      var index = deletecat.indexOf(value);
      deletecat.splice(index, 1);
      console.log(deletecat);
    }
  };

  function check(a, name) {
    if (a.indexOf(name) != -1) {
      return false;
    } else {
      return true;
    }
  }

  //Update Item and Schema
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
    handleOpenUpdateItem();
  }

  //Styled Component
  const styleCategoryAddModal = {
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

  const styleDeleteCat = {
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
  const styleItemModal = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "54%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "665px",
    bgcolor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };

  const AddItemButton = {
    marginTop: "20px",
    marginLeft: "auto",
    width: "max-content",
    paddingTop: "3px",
    paddingLeft: "10px",
    paddingRight: "15px",
    justifyContent: "end",
    border: "1px solid black",
    height: "30px",
    borderRadius: "8px",
  };

  const CategoryRemoveButton = {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "10px",
    width: "max-content",
    paddingTop: "3px",
    paddingLeft: "10px",
    paddingRight: "15px",
    justifyContent: "end",
    border: "1px solid black",
    height: "30px",
    borderRadius: "8px",
  };

  const CategoryAddButton = {
    marginTop: "20px",
    marginLeft: "0px!important",
    marginRight: "10px !important",
    width: "max-content",
    paddingTop: "3px",
    paddingLeft: "10px",
    paddingRight: "15px",
    justifyContent: "end",
    border: "1px solid black",
    height: "30px",
    borderRadius: "8px",
  };

  const styletextField = {
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
  };

  //return Statement
  return (
    <div>
      <Navbar />
      <h4 className="bolderr text-color">Menu</h4>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Card
            className={`${btext}`}
            style={AddItemButton}
            onClick={handleOpenCreateItem}
          >
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#0077FF",
              }}
            >
              + Item
            </Link>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            className={`${btext}`}
            style={CategoryRemoveButton}
            onClick={handleOpenRemoveCat}
          >
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#0077FF",
              }}
            >
              - Category
            </Link>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={CategoryAddButton} onClick={handleOpenCreateCat}>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "14px",
                color: "#0077FF",
              }}
            >
              + Category
            </Link>
          </Card>
        </Grid>
      </Grid>

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
            value={valueTabList}
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
                    marginLeft: "15px",
                    minWidth: "auto",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#667085",
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

      <h4 className={`bolder-menu text-color ${wtext}`}>
        Add your first menu category. Example “Appetizers”.
      </h4>
      <Modal
        open={openCreateCat}
        onClose={handleCloseCreateCat}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleCategoryAddModal}>
          <p className="left">Catergory Name</p>
          <TextField
            fullWidth
            sx={styletextField}
            label="Beverages"
            variant="outlined"
            size="small"
            //setting the value of the form to the props value
            onChange={
              (e) => setCategoryname({ ...catergoryname, name: e.target.value }) //setting the formData to the value input of the textfield
            }
          />

          <Button
            variant="contained"
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF!important",
              marginTop: "40px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            onClick={() => {
              submitCreateCategory();
            }}
          >
            Add
          </Button>

          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseCreateCat}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal open={openRemoveCat} onClose={handleCloseRemoveCat}>
        <Box sx={styleDeleteCat}>
          <p
            style={{ marginTop: "5px", marginBottom: "5px" }}
            className="center-text bold-text"
          >
            Select Category
          </p>
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "330px",
              borderRadius: "8px",
              overflow: "scroll",
            }}
          >
            {category.map((cat, index) => {
              return (
                <div key={index}>
                  <Grid container spacing={1}>
                    <Grid className="checkbox-modal" item xs={1}>
                      <Checkbox
                        sx={{
                          color: "#D0D5DD ",
                          marginLeft: "0px ",
                          marginTop: "8px!important ",
                          marginBottom: "4px ",
                          position: "relative ",
                          padding: "0px",
                          left: "12px ",
                          "&.Mui-checked": {
                            color: "#0077FF",
                          },
                        }}
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        value={cat.id}
                        checked={cat.isChecked}
                        onChange={(e) => {
                          handleCheckbox(e);
                        }}
                      />
                    </Grid>
                    <Grid item xs={11}>
                      <p
                        style={{ color: "black", fontWeight: "500" }}
                        className="spacing-3"
                      >
                        {cat.name}
                      </p>
                    </Grid>
                  </Grid>
                  <Divider style={{ marginTop: "10px" }} />
                </div>
              );
            })}
          </Card>

          <Button
            fullWidth
            className="button"
            sx={{
              color: "red !important",
              backgroundColor: "White",
              fontWeight: "500 !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              marginTop: "40px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={submitRemoveCategory}
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
              fontWeight: "500 !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseRemoveCat}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal open={openCreateItem} onClose={handleCloseCreateItem}>
        <Box sx={styleItemModal}>
          <Grid container>
            <Grid item xs={6}>
              <Card
                style={{
                  border: "2px solid black",
                  backgroundColor: "#D1E9FF",
                  fontFamily: "Montserrat",
                  width: "96px",
                  height: "96px",
                  marginTop: "20px",
                  borderRadius: "100px",
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
              <p style={{ textAlign: "left", marginLeft: "28px" }}>Image</p>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        className="margin-top-image"
                        src={Camera}
                        alt=""
                      ></img>
                    </Grid>
                    <Grid item xs={8}>
                      <h4
                        style={{ fontSize: "16px" }}
                        className="margin-top-text"
                      >
                        {" "}
                        Take Photo
                      </h4>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        className="margin-top-image"
                        src={Upload}
                        alt=""
                      ></img>
                    </Grid>
                    <Grid item xs={8}>
                      <h4
                        style={{ fontSize: "16px" }}
                        className="margin-top-text"
                      >
                        {" "}
                        Upload
                      </h4>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <p className="left">Item Name</p>
          <TextField
            fullWidth
            sx={styletextField}
            label="Italy 5 Cheese Dinner"
            variant="outlined"
            size="small"
            //setting the value of the form to the props value
            onChange={
              (e) => setItemname({ ...itemname, name: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
          <p className="left">Price</p>
          <TextField
            fullWidth
            sx={styletextField}
            label="$21.99"
            variant="outlined"
            size="small"
            //setting the value of the form to the props value
            onChange={
              (e) => setItemname({ ...itemname, price: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
          <p className="left">Description</p>
          <TextField
            multiline
            rows={5}
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
            label="Enter item Description"
            variant="outlined"
            size="small"
            //setting the value of the form to the props value
            onChange={
              (e) =>
                setItemname({
                  ...itemname,
                  description: e.target.value,
                }) //setting the formData to the value input of the textfield
            }
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              marginTop: "40px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={submitCreateItem}
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
            onClick={handleCloseCreateItem}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal open={openUpdateItem} onClose={handleCloseUpdateItem}>
        <Box sx={styleItemModal}>
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
                  border: "1px solid #D0D5DD",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #D0D5DD ",
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
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #D0D5DD",
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
            multiline
            rows={3}
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #D0D5DD",
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
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              marginTop: "40px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleItemPut}
          >
            Update
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "red !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleOpenRemoveItemModal}
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
            onClick={handleCloseUpdateItem}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openRemoveItem}
        onClose={handleCloseRemoveItem}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleCategoryAddModal}>
          <p style={{ marginTop: "30px" }} className="success-text">
            Are you sure you want to <br /> remove this item?
          </p>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "red  !important",
              backgroundColor: "white !important",
              marginTop: "60px!important",
              borderRadius: "8px !important",
              border: "1px solid red !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleItemDelete}
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
            onClick={handleCloseRemoveItem}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Menu