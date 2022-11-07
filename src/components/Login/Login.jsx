import React from "react";
import Container from "@mui/material/Container";
import { Link,} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Logo from "../../Assets/Images/Google-icon.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../_helpers";
import { authActions } from "../../_store";
import "./login.css";

function Login() {

  // Declaration of dispatch and authUser
  const dispatch = useDispatch();
  const authUser = useSelector((x) => x.auth.user);


  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;


  //Submitting Username, password
  function onSubmit({ username, password }) {
    return dispatch(authActions.login({ username, password }));
  }


  //Navigation
  let navigate = useNavigate();

  function handleNavigateSignUp() {
    navigate("/signup");
  }
  function handleNavigateForgotPassword() {
    navigate("/forgotpassword");
  }
  if (authUser) history.navigate("/home");


  //Styling Components
  const StyleTextField = {
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
  };
  const SignInButton = {
    color: "white",
    backgroundColor: "#0077FF",
    borderColor: "black",
    fontSize: "16px",
    fontWeight: "500 ",
    borderRadius: "8px",
    border: "1px solid black",
    height: "44px",
    fontFamily: "Montserrat",
  };

  const SignInWithGoogle = {
    borderColor: "black",
    borderRadius: "8px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "500 !important",
    width: "hug(159px)",
    border: "1px solid #00000",
    height: "44px",
    color: "#0077FF",
  }

  const StyleCheckbox = {
    color: "#D0D5DD",
    marginLeft: "0px",
    position: "relative",
    left: "-10px",
    "&.Mui-checked": {
      color: "#0077FF",
    },
  };


  //return statement
  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            {/*Form */}
            <h4 className="title">Sign In</h4>
            <p className="welcome-text">
              Welcome back! Please enter your <br /> details below
            </p>
            <div className="margin-t">
              <h5 className="left">Email</h5>

              <TextField
                fullWidth
                sx={StyleTextField}
                label="Enter your email"
                variant="outlined"
                name="username"
                size="small"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />

              <h5 className="left">Password</h5>
              <TextField
                fullWidth
                sx={StyleTextField}
                label="Enter your password"
                size="small"
                type="password"
                variant="outlined"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                name="password"
              />
            </div>
            <Grid container spacing={0}>
              <Grid className="checkbox" item xs={1}>
                <Checkbox
                  sx={StyleCheckbox}
                />
              </Grid>
              <Grid item xs={6}>
                <p className="p-css">Remember for 30 days</p>
              </Grid>
              <Grid item xs={5}>
                <div className="float">
                  <Link
                    onClick={handleNavigateForgotPassword}
                    style={{
                      textDecoration: "none",
                      color: "#0077FF",
                      lineHeight: "20px",
                    }}
                  >
                    Forgot password
                  </Link>
                </div>
              </Grid>
            </Grid>
            <Button
              fullWidth
              className="signin-button button"
              sx={SignInButton}
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Sign In
            </Button>
            <Button
              className="google-button button"
              fullWidth
              sx={SignInWithGoogle}
              variant="outlined"
              startIcon={<img className="google-icon" src={Logo} alt=""></img>}
            >
              Sign In with Google
            </Button>
          </form>
          <div className="no-account">
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <p className="text-account">Don't have an account?</p>
              </Grid>
              <Grid item xs={4}>
                <Link
                  style={{ textDecoration: "none" }}
                  className="Sign-Up"
                  onClick={handleNavigateSignUp}
                >
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
