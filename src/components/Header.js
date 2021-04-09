import React from "react";
import { Container } from "@material-ui/core";
import { TiWeatherCloudy } from "react-icons/ti";

const Header = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "300%" }}>
        FAST WEATHER <TiWeatherCloudy style={{ verticalAlign: "middle" }} />
      </h1>
      <h2>Clueless About Weather Updates ? Say no more </h2>
    </Container>
  );
};

export default Header;
