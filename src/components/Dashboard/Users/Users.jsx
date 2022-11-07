import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Grid, Modal, Divider } from "@material-ui/core";
import { Link } from "@mui/material";
import { Checkbox, Button } from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Right from "../../../Assets/Images/right.png"
import { useNavigate } from "react-router-dom";
import './users.css'

function Users() {
    const [openAddUser, setOpenAddUser] = React.useState(false);
    const handleOpenAddUser = () => setOpenAddUser(true);
    const handleCloseAddUser = () => setOpenAddUser(false);
    const [openEditUser, setOpenEditUser] = React.useState(false);
    const handleOpenEditRole = () => setOpenEditUser(true);
    const handleCloseEditRole = () => setOpenEditUser(false);
    const [openUserInvite, setUserInvite] = React.useState(false);
    const handleOpenUserInvite = () => setUserInvite(true);
    const handleCloseUserInvite = () => setUserInvite(false);
    const [openEditRoleDetails, setOpenEditRoleDetails] = React.useState(false);
    const handleOpenerr = () => setOpenEditRoleDetails(true);
    const handleCloserr = () => setOpenEditRoleDetails(false);

    function handleOpenClose() {
      handleOpenEditRole();
      handleCloseAddUser();
    }
      function handleOpenClose2() {
        handleOpenUserInvite();
        handleCloseEditRole();
      }
      function handleOpenClose3() {
        handleOpenUserInvite();
        handleCloserr();
      }

    const style = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "425px",
      bgcolor: "white",
      border: "1px solid #000000",
      borderRadius: "8px",
      boxShadow: 24,
      zIndex: "+1",
      p: 4,
    };
    const stylee = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "37%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "355px",
      bgcolor: "white",
      border: "1px solid #000000",
      borderRadius: "8px",
      boxShadow: 24,
      zIndex: "+1",
      p: 4,
    };
    const styler = {
          position: "absolute",
          paddingTop: "0px !important",
          paddingLeft: "15px !important",
          paddingRight: "15px !important",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          height: "500px",
          bgcolor: "white",
          border: "1px solid #000000",
          borderRadius: "8px",
          boxShadow: 24,
          zIndex: "+1",
          p: 4,
        };
        
       let navigate = useNavigate();
       function handleClick() {
              navigate(-1);
       }
  return (
    <div>
      <Navbar />
      <h4 className="bolderr text-color">Users</h4>
      <Grid container>
        <Grid item xs={9}>
          <p className="user-role">User/Email/Role</p>
        </Grid>
        <Grid item xs={3}>
          <Card
            style={{
              marginTop: "1px",
              marginLeft: "auto",
              marginRight: "20px",
              width: "max-content",
              paddingTop: "3px",
              paddingLeft: "10px",
              paddingRight: "15px",
              justifyContent: "end",
              border: "1px solid black",
              height: "30px",
              borderRadius: "8px",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginLeft: "3px",
              }}
              onClick={handleOpenAddUser}
            >
              Invite
            </Link>
          </Card>
        </Grid>
      </Grid>
      <Divider style={{ border: "1px solid #D0D5DD" }} />

      <Card
        id="disabled-role"
        style={{
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "51px",
          marginBottom: "10px",
          borderRadius: "8px",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <Grid container>
              <Grid item xs={12}>
                <h4 style={{ marginTop: "-4px" }} className="name-role">
                  Leah Martin - Admin
                </h4>
              </Grid>
              <Grid item xs={12}>
                <p className="role-email">leah23martin@italybarandgrill.com</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <img style={{ marginTop: "17px" }} src={Right} alt=""></img>
          </Grid>
        </Grid>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "51px",
          marginBottom: "10px",
          borderRadius: "8px",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <Grid container>
              <Grid item xs={12}>
                <h4
                  style={{ marginTop: "-4px" }}
                  className="name-role-disabled"
                >
                  Pending - Admin
                </h4>
              </Grid>
              <Grid item xs={12}>
                <p className="role-email-disabled">sarahjane67@gmail.com</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <img
              style={{ marginTop: "17px" }}
              src={Right}
              alt=""
              onClick={handleOpenerr}
            ></img>
          </Grid>
        </Grid>
      </Card>

      <p className="invite-text">
        Invite your servers & hosts to <br /> join you
      </p>

      <Modal
        open={openAddUser}
        onClose={handleCloseAddUser}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p style={{ color: "#344054" }} className="left">
            Email
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

          <Card
            style={{
              marginTop: "10px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "140px",
              borderRadius: "8px",
            }}
          >
            <Grid container spacing={1}>
              <Grid className="checkbox-modal" item xs={1}>
                <Checkbox
                  sx={{
                    marginTop: "8px !important",
                    color: "#D0D5DD !important",
                    marginLeft: "0px !important",
                    position: "relative !important",
                    padding: "0px",
                    marginBottom:"3px",
                    paddingLeft: "0px !important",
                    left: "12px !important",
                    "&.Mui-checked": {
                      color: "#0077FF !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <p
                  style={{ color: "black", fontWeight: "500" }}
                  className="spacing-3"
                >
                  Admin
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
              <Grid className="checkbox-modal" item xs={1}>
                <Checkbox
                  sx={{
                    marginTop: "8px !important",
                    color: "#D0D5DD !important",
                    marginLeft: "0px !important",
                    position: "relative !important",
                    padding: "0px",
                    marginBottom:"3px",
                    paddingLeft: "0px !important",
                    left: "12px !important",
                    "&.Mui-checked": {
                      color: "#0077FF !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <p
                  style={{ color: "black", fontWeight: "500" }}
                  className="spacing-3"
                >
                  Host
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
              <Grid className="checkbox-modal" item xs={1}>
                <Checkbox
                  sx={{
                    marginTop: "8px !important",
                    color: "#D0D5DD !important",
                    marginLeft: "0px !important",
                    position: "relative !important",
                    paddingLeft: "0px !important",
                    padding: "0px",
                    marginBottom:"3px",
                    left: "12px !important",
                    "&.Mui-checked": {
                      color: "#0077FF !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <p
                  style={{ color: "black", fontWeight: "500" }}
                  className="spacing-3"
                >
                  Server
                </p>
              </Grid>
            </Grid>
            <Divider />
          </Card>
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
            // onClick={handleClickkk}
          >
            Invite
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
            onClick={handleCloseAddUser}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openEditUser}
        onClose={handleCloseEditRole}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p style={{ color: "#344054" }} className="left">
            Email
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
            disabled
          />
          <p style={{ color: "#344054" }} className="left">
            Role
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
            disabled
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
            onClick={handleOpenClose2}
            // onClick={handleClickkk}
          >
            Edit Role
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
              color: "#FF1F00 !important",
            }}
            variant="contained"
            onClick={handleCloseEditRole}
            // onClick={handleClickkk}
          >
            Cancel Invite
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openUserInvite}
        onClose={handleCloseUserInvite}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p style={{ color: "#344054" }} className="left">
            User
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

          <Card
            style={{
              marginTop: "10px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "140px",
              borderRadius: "8px",
            }}
          >
            <Grid container spacing={1}>
              <Grid className="checkbox-modal" item xs={1}>
                <Checkbox
                  sx={{
                    marginTop: "8px !important ",
                    color: "#D0D5DD !important",
                    marginLeft: "0px !important",
                    position: "relative !important",
                    paddingLeft: "0px !important",
                    padding: "0px",
                    left: "12px !important",
                    "&.Mui-checked": {
                      color: "#0077FF !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <p
                  style={{ color: "black", fontWeight: "500" }}
                  className="spacing-3"
                >
                  Admin
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
              <Grid className="checkbox-modal" item xs={1}>
                <Checkbox
                  sx={{
                    marginTop: "8px !important ",
                    color: "#D0D5DD !important",
                    marginLeft: "0px !important",
                    position: "relative !important",
                    padding: "0px",
                    left: "12px !important",
                    "&.Mui-checked": {
                      color: "#0077FF !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <p
                  style={{ color: "black", fontWeight: "500" }}
                  className="spacing-3"
                >
                  Host
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
              <Grid className="checkbox-modal" item xs={1}>
                <Checkbox
                  sx={{
                    marginTop: "8px !important ",
                    color: "#D0D5DD !important",
                    marginLeft: "0px !important",
                    position: "relative !important",
                    padding: "0px",
                    left: "12px !important",
                    "&.Mui-checked": {
                      color: "#0077FF !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <p
                  style={{ color: "black", fontWeight: "500" }}
                  className="spacing-3"
                >
                  Server
                </p>
              </Grid>
            </Grid>
            <Divider />
          </Card>
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
            onClick={handleOpenUserInvite}
            // onClick={handleClickkk}
          >
            Invite
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
            onClick={handleCloseUserInvite}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openEditRoleDetails}
        onClose={handleCloserr}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styler}>
          <p style={{ color: "#344054" }} className="left">
            User
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

          <p style={{ color: "#344054" }} className="left">
            Email
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
          <p style={{ color: "#344054" }} className="left">
            Role
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
          <Button
            fullWidth
            className="signin-button button"
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
            onClick={handleOpenClose3}
            // onClick={handleClickkk}
          >
            Edit Role
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
              color: "#FF1F00 !important",
              fontWeight: "500 !important",
            }}
            variant="contained "
            onClick={handleCloserr}
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
              height: "44px",
            }}
            variant="contained"
            onClick={handleCloserr}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Users
