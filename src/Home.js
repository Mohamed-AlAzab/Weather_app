import "./index.css";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { auth, db } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setUserDetails(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const LogOut = async () => {
    try {
      await auth.LogOut;
      window.location.href = "/Login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  return (
    <div>
      <h1>Home bage</h1>
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.Username} </h3>
          <div className="button">
            <Button onClick={LogOut} variant="contained" className="logout">
              Logout
            </Button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
