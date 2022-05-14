import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../actions/auth";
import "./auth.scss";
import CustomInput from "./CustomInput";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = (props) => {
  const [isSignUp, setIsSignUp] = useState(props.isSignUp);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignUp((isSignUp) => !isSignUp);
    setShowPassword(false);
  };

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: "AUTH", data: { result, token } });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleFailure = (error) => {
  //   console.log(error);
  //   console.log("Google Sign In was unsuccessful. Try Again Later");
  // };

  // function onSignIn(googleUser) {
  //   console.log("tets");
  //   var profile = googleUser.getBasicProfile();
  //   console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log("Name: " + profile.getName());
  //   console.log("Image URL: " + profile.getImageUrl());
  //   console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  return (
    <>
      <div className="auth">
        <div className="authContainer">
          <div className="top">
            <div className="title">Research Management Application</div>
          </div>
          <div className="center">
            <div className="left">
              <h1 className="title"> {isSignUp ? "Registration" : "Login"}</h1>
              <h1 className="description">
                {isSignUp
                  ? "  Register to the Research Management Application"
                  : "  Login to the Research Management Application"}
              </h1>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {isSignUp && (
                    <>
                      <CustomInput
                        name="firstName"
                        label="First Name"
                        handleChange={handleChange}
                        autoFocus
                        half
                      />
                      <CustomInput
                        name="lastName"
                        label="Last Name"
                        handleChange={handleChange}
                        half
                      />
                    </>
                  )}
                  <CustomInput
                    name="email"
                    label="Email Address"
                    handleChange={handleChange}
                    type="email"
                  />
                  <CustomInput
                    name="password"
                    label="Password"
                    handleChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    handleShowPassword={handleShowPassword}
                  />
                  {isSignUp && (
                    <>
                      <CustomInput
                        name="confirmPassword"
                        label="Repeat Password"
                        handleChange={handleChange}
                        type="password"
                      />
                    </>
                  )}
                </Grid>
                <Grid
                  container
                  justifyItems={"flex-end"}
                  style={{ marginTop: "2%" }}
                >
                  <Grid item>
                    <Button onClick={switchMode}>
                      {isSignUp
                        ? "Already Have an Account ? Sign in"
                        : "Don't Have an Account ? Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "2%" }}
                >
                  {isSignUp ? "Register" : "Login"}
                </Button>
                {/* <GoogleLogin
                  clientId="555752779173-fqncj4e6lemo2q0ptptkmrmv89q7pb1j.apps.googleusercontent.com"
                  render={(renderProps) => {
                    return (
                      <>
                        <Button
                          className="classes.googleButton"
                          color="primary"
                          fullWidth
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          startIcon={<Icon />}
                          variant="contained"
                          style={{ marginTop: "2%" }}
                        >
                          GoogLe Sign In
                        </Button>
                      </>
                    );
                  }}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                /> */}
                {/* <div class="g-signin2" onSubmit={onSignIn}></div> */}
              </form>
            </div>
            <div className="right">
              <img
                src="https://www.kindpng.com/picc/m/755-7554518_login-icon-cartoon-hd-png-download.png"
                alt=""
                className="image"
              />
            </div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Auth;
