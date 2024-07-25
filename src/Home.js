import "./index.css";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { auth, db } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";
// import Image from "./Photo/searchIcon.png";
import { getFormattedWeatherData } from "./weatherService";
import ImgHumidity from "./Photo/humidity.png";
import ImgWindSpeed from "./Photo/windSpeed.png";
import ImgPressure from "./Photo/pressure.png";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      setUserDetails(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        // console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      console.log(data);
      setWeather(data);
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const handleCityClick = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

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
    <div className="Home">
      {userDetails ? (
        <>
          <nav className="navBar">
            <div className="homeLogo">
              <h2>Weather News</h2>
            </div>
            <div className="homeButton">
              <Button onClick={LogOut} variant="contained" className="logout">
                Logout
              </Button>
            </div>
          </nav>
          <div className="homeContainer">
            <div className="weather">
              <div className="search">
                <input
                  onKeyDown={handleCityClick}
                  type="text"
                  placeholder="Enter City Name"
                />
                {/* <Button
                  variant="contained"
                  className="searchButton"
                >
                  <img src={Image} alt="searchIcon" width={35} height={35} />
                </Button> */}
                <Button
                  onClick={(e) => handleUnitClick(e)}
                  variant="contained"
                  className="convertButton"
                >{`°${units === "metric" ? "C" : "F"}`}</Button>
              </div>
              {weather ? (
                <div className="cardInfo">
                  <h3 className="city">{`${weather.name}, ${weather.country}`}</h3>
                  <h3 className="discription">{`${weather.description}`}</h3>
                  <h3 className="temp">{`${weather.temp.toFixed()}°${
                    units === "metric" ? "C" : "F"
                  }`}</h3>
                  <img
                    src={`${weather.iconURL}`}
                    alt="state"
                    className="state"
                  />
                  <div className="description">
                    <div className="discriptionHumidity">
                      <div className="img">
                        <img src={ImgHumidity} alt="" />
                      </div>
                      <div className="info">
                        {`${weather.humidity}`}% <p>Humidity</p>
                      </div>
                    </div>
                    <div className="discriptionWindSpeed">
                      <div className="img">
                        <img src={ImgWindSpeed} alt="" />
                      </div>
                      <div className="info">
                        {`${weather.speed}`} m/s <p>Wind Speed</p>
                      </div>
                    </div>
                    <div className="discriptionPressure">
                      <div className="img">
                        <img src={ImgPressure} alt="" width={42} height={40} />
                      </div>
                      <div className="info">
                        {`${weather.pressure}`} hPa <p>Pressure</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (<></>)}
            </div>
          </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default Home;

/* <h3>Welcome {userDetails.Username} </h3> */
