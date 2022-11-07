import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  makeStyles,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../_store";
import './drawer.css'

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "Montserrat",
    
  },
  icon: { color: "white", marginTop: "60px" },
  logo: { flexGrow: "1", cursor: "pointer" },
  draw: { background: "red" },
  paper: {
    marginTop: "115px",
    background: "#0077FF",
    color: "white",
    width: 180,
    height: 500,
  },
  divider: {
    // Theme Color, or use css color in quote
    background: "#D0D5DD",
    width: "170px",
    marginLeft: "5px",
    height: "0.5px",
    border:'none',
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

        const authUser = useSelector((x) => x.auth.user);
        const dispatch = useDispatch();
        const logout = () => dispatch(authActions.logout());

        // only show nav when logged in
        if (!authUser) return null;


  return (
    <>
      <Drawer
        anchor="right"
        sx={{ width: "150px", color: "White", height: "100px" }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        <Box sx={{ backgroundColor: "#0077FF" }} height="50vh">
          <List height="50vh">
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/home" className={classes.link}>
                  Home Feed
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemText>
                <Link to="/menu" className={classes.link}>
                  Menu
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemText>
                <Link to="/tablemanager" className={classes.link}>
                  Table Manager
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemText>
                <Link to="/Users" className={classes.link}>
                  Users
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemText>
                <Link to="/Accounts" className={classes.link}>
                  Accounts
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemText>
                <Link to="/Settings" className={classes.link}>
                  Settings
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemText>
                <Link to="/Settings" className={classes.link}>
                  Support
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <Grid className="top" container spacing={3}>
              <Grid item xs={6}>
                <Link
                  id="sign-out"
                  to="/"
                  onClick={logout}
                  className={classes.link}
                >
                  Sign Out
                </Link>
              </Grid>
              <Grid item xs={6}>
                <p id="sign-outt">IB34672</p>
              </Grid>
            </Grid>
          </List>
        </Box>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
