import "./index.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "./Image.js";

const Main = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="logo">
          <p className="text-logo">Weather News</p>
        </div>

        <div className="infomation">
          <div className="header">
            <h1>Weather & Forecast Website</h1>
          </div>
          <div className="text">
            <p className="">
              Use weather website and get weather information daliy and daily.
            </p>
          </div>
        </div>

        <Stack className="button" direction="row">
          <Button
            variant="contained"
            className="login"
            sx={{
              textTransform: "none",
            }}
            href="/Login"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
            }}
            className="signup"
            href="/Signup"
          >
            Sign up
          </Button>
        </Stack>
      </div>
      <Image />
    </div>
  );
};

export default Main;
