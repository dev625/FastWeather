import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Button, Typography, CardHeader } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { WatchLater } from "@material-ui/icons";

const useStyles = makeStyles({
  text: {
    color: "black",
    fontSize: "140%",
    textAlign: "center",
  },
  content: {
    fontSize: "120%",
  },
});

const WeatherCard = ({ weather, err1 }) => {
  const classes = useStyles();
  if (err1) {
    return <h1>Please Enter a Valid Location</h1>;
  } else {
    return (
      <Card
        style={{
          backgroundImage:
            "linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)",
          margin: "10px",
        }}
      >
        <CardContent className={classes.text}>
          <div>
            <h1>{weather.location.name}</h1>
            <img src={weather.current.condition.icon}></img>
          </div>
          <h1>Region : {weather.location.region}</h1>
          <p className={classes.content}>
            Current Temperature : {weather.current.temp_c}&#176;C
          </p>
          <p className={classes.content}>
            Feels Like : {weather.current.feelslike_c}&#176;C
          </p>
          <p className={classes.content}>
            PM 2.5 Level :&nbsp;
            {parseFloat(weather.current.air_quality.pm2_5).toFixed(3)}
          </p>
          <p className={classes.content}>
            PM 10 Level :&nbsp;
            {parseFloat(weather.current.air_quality.pm10).toFixed(3)}
          </p>
        </CardContent>
      </Card>
    );
  }
};

export default WeatherCard;
