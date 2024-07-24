import "./index.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { auth, db } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import icon from "./Photo/google-logo.png";
import Image from "./Image.js";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");

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

  const signUp = async () => {
    if (password === passwordC) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            Username: username,
          });
        }
        console.log("User Registered Successfully!!");
        window.location.href = "/Home";
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Password didn't match!");
    }
  };

  return (
    <div className="App">
      <div className="signin-container">
        <form id="form">
          <h1>Sign up</h1>
          <div class="input-control">
            {/* input username */}
            <input
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* input email */}
            <input
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* input password */}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* input Repeat password */}
            <input
              type="password"
              placeholder="confirm password"
              onChange={(e) => setPasswordC(e.target.value)}
            />
          </div>

          <div class="button-r">
            <Button onClick={signUp} variant="contained" className="signin-r">
              Sign up
            </Button>
          </div>

          <div className="info">
            <p>
              Did you have account ?{" "}
              <Link className="link" to="/Login">
                Login
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
              Sign up With Google
            </Button>
          </div>
        </form>
      </div>
      <Image />
    </div>
  );
};

export default Signup;
