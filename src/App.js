import "./App.css";
import Header from "./components/Header.js";
import WeatherCard from "./components/WeatherCard";
import React, { Fragment, useState, useEffect } from "react";
import {
  Container,
  InputLabel,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
const { apikey } = require("./api/keys");

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});
function App() {
  const [loc, setLoc] = useState("");
  const [err1, setErr1] = useState(true);
  const [weather, setWeather] = useState({});
  const classes = useStyles();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loc);
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${loc}&aqi=yes`;
    const foo = await fetch(url);
    const data = await foo.json();
    if (data.hasOwnProperty("error")) {
      setErr1(true);
    } else {
      setWeather(data);
      setErr1(false);
    }
  };

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <Container>
      <Header />
      <Container align="center">
        <form onSubmit={handleSubmit}>
          <InputLabel>Well, You do need to enter your location. </InputLabel>
          <TextField
            htmlFor="location"
            type="string"
            id="location"
            name="location"
            value={loc}
            margin="normal"
            fullWidth
            required="true"
            onChange={(e) => {
              setLoc(e.target.value);
            }}
          ></TextField>
          <Button className={classes.root} type="submit">
            Submit
          </Button>
        </form>
      </Container>
      <Container>
        <WeatherCard weather={weather} err1={err1} />
      </Container>
    </Container>
  );
}

export default App;