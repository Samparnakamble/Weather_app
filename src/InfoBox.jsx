import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";

import Typography from "@mui/material/Typography";

function InfoBox({ info }) {
  let INIL_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2V0aGVyfGVufDB8fDB8fHww";
  let HOT_URL =
    "https://cdn.pixabay.com/photo/2016/01/19/21/41/painting-1150525_640.jpg";
  let COLD_URL =
    "https://tse4.mm.bing.net/th?id=OIP.G4Ir6mw-mZNj4GeNZqonKgHaEK&pid=Api&P=0&h=180";
  let RAIN_URL =
    "https://tse1.mm.bing.net/th?id=OIP.a6NJ8XKZ4PxKeAPOZ7Ps5wHaE8&pid=Api&P=0&h=180";
  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.cityName}&nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <LightModeIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperture: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>
                The Weather can be discrib as <b>{info.weather}</b> and feels
                like: {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
