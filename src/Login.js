import "./index.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { auth, db } from "./config/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import icon from "./Photo/google-logo.png";
import { doc, setDoc } from "firebase/firestore";
import Image from "./Image.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          Username: user.displayName,
        });
        window.location.href = "/Home";
      }
    });
  };

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Registered Successfully!!");
      window.location.href = "/Home";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        <form id="form" action="/">
          <h1>Login</h1>
          <div class="input-control">
            {/* input email */}
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* input password */}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="button-r">
            <Button
              onClick={logIn}
              variant="contained"
              className="login-r"
            >
              Login
            </Button>
          </div>
          <div className="info">
            <p>
              Create account ?{" "}
              <Link className="link" to="/Signup">
                Signup
              </Link>
            </p>
          </div>
          <div className="or-line">
            <span className="line">-------------</span>
            <span>or</span>
            <span className="line">-------------</span>
          </div>
          <div class="button-g">
            <Button
              variant="contained"
              className="google-button"
              onClick={googleSignup}
            >
              <img src={icon} alt="logo" />
              Login With Google
            </Button>
          </div>
        </form>
      </div>
      <Image />
    </div>
  );
};

export default Login;
