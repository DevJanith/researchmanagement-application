import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = React.useState({
    userName: "",
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      {/* <Sidebar /> */}
      <div className="loginContainer">
        {/* <Navbar /> */}
        <div className="loginForm">
          <div className="top">
            <div className="title">Research Management Application</div>
          </div>
          <div className="bottom">
            <div className="left">
              <h1 className="title">Login</h1>
              <h1 className="description">
                Login to the Research Management Application
              </h1>
              <Grid container spacing={2}>
                <Grid md={12} sx={{ padding: "10px" }}>
                  <TextField
                    id="user-name"
                    type="text"
                    value={values.userName}
                    onChange={handleChange("userName")}
                    fullWidth
                    label="User Name"
                  />
                </Grid>
                <Grid md={12} sx={{ padding: "10px" }}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                      id="password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      fullWidth
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <h1 className="description2">
                  Not a User ?{" "}
                  <Link to={"/registration"} style={{ textDecoration: "none" }}>
                    <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                      Register Here
                    </span>
                  </Link>
                </h1>
                <Grid md={12} sx={{ padding: "30px 0" }}>
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Button variant="contained" size="medium" fullWidth>
                      Login
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
            <div className="right">
              <img
                src="https://www.kindpng.com/picc/m/755-7554518_login-icon-cartoon-hd-png-download.png"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
