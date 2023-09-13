import React, { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { BsSearch, BsDropletFill, BsWind, BsFillEyeFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { TbArrowsDown } from "react-icons/tb"
import { HiOutlineRefresh } from "react-icons/hi"
export default function WeatherApp() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}`;
  const apiKey = `&appid=97dcae0207e1344e09aa608c93820c31`;
  const apiUnits = `&units=metric`;
  function handleLocation() {
    fetch(url + apiKey + apiUnits)
      .then((response) => {
        if (!response) {
          throw new Error("failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeather(data);
        console.log(weather);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleRefresh() {
    setWeather('')
  }
  return (
    <>
      <div>
        <div className="container ml-5 my-5 ">
          <div className=" row">
            <h2 className="highlights my-4">
              <b className="temp">
                <TiWeatherCloudy />
                Weather
              </b>
              <div className="input text-center">
                <input
                  type="text"
                  className="mx-5 search-bar"
                  value={location}
                  placeholder="Enter any location"
                  onChange={(e) => setLocation(e.target.value)}
                />

                <button
                  className="btn btn-primary btn-color pos"
                  style={{ fontFamily: "poppins" }}
                  onClick={handleLocation}
                >
                  <BsSearch />
                </button>
                <button
                  className="btn btn-primary btn-color mx-3 pos"

                  onClick={handleRefresh}
                >
                  <HiOutlineRefresh />
                </button>


              </div>
            </h2>
            <div className="col tab-1 my-4 m-lg-3">
              <p className="temp my-4">
                Now {weather.main && weather.main.temp}°c
              </p>
              <br />
              <div className="info-container">
                <p className="my-4 feelsLike">
                  Feels-Like: {weather.main && weather.main.feels_like}°c
                </p>
                <p className="location">
                  {" "}
                  <MdLocationOn />
                  Location: {weather.name}
                </p>{" "}
                {/* New line for location */}
              </div>
            </div>
            <div className="col tab-1 my-4 m-lg-3">
              <div className="info-container">
                <p className="my-4 feelsLike">
                  <BsDropletFill /> Humidity:{" "}
                  {weather.main && weather.main.humidity}%
                </p>
                <p className="location">
                  <TbArrowsDown /> Pressure: {weather.main && weather.main.pressure} mbar
                </p>{" "}
                {/* New line for location */}
              </div>

              <br />
              <div className="info-container">
                <p className="my-4 feelsLike">
                  <BsWind /> Wind: {weather.wind && weather.wind.speed} km/h
                </p>
                <p className="location"> <BsFillEyeFill /> Visibility: {weather.visibility} m</p>{" "}
                {/* New line for location */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col tab-2"></div>
            <div className="col tab-2"></div>
            <div className="col tab-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
