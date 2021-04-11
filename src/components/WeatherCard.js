import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

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
    return (
      <Container style={{ marginTop: "1%" }}>
        <Alert variant="filled" severity="error">
          <AlertTitle style={{ fontSize: 14 }}>
            <h1>ERROR</h1>
          </AlertTitle>
          <h2>PLEASE ENTER A VALID LOCATION</h2>
        </Alert>
      </Container>
    );
  } else {
    return (
      <Card
        style={{
          backgroundColor: "#D9AFD9",
          backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
          marginTop: "5%",
        }}
      >
        <CardContent className={classes.text}>
          <div>
            <h1>{weather.location.name}</h1>
            <div>
              <img
                src={weather.current.condition.icon}
                alt="Icon Displaying Current Weather"
                style={{ backgroundColor: "white", borderRadius: "50%" }}
              />
            </div>
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
          <p className={classes.content}>
            Visibility :&nbsp;
            {weather.current.vis_km} KM
          </p>
        </CardContent>
      </Card>
    );
  }
};

export default WeatherCard;
