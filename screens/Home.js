import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchBar from "../components/SearchBar";
import WeatherList from "../components/WeatherList";
import Config from "../config.json";

export default function Home({ navigation }) {
  const APIKEY = Config.API_TOKEN;
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const getWeatherData = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        searchQuery +
        "&appid=" +
        APIKEY +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("FETCH NUMBER 1");
        console.log(data);
        setLocation(data);
        return fetch(
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            data.coord.lat +
            "&lon=" +
            data.coord.lon +
            "&exclude=hourly,minutely&appid=" +
            APIKEY +
            "&units=metric"
        );
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("FETCH NUMBER 2");
        console.log(data);
        setWeather(data);
      })
      .catch((err) => {
        console.error("Request Failed", err);
      });
  };

  const clickHandler = () => {
    console.log("Search Button Pressed!");
    console.log(searchQuery);
    // HÄMTA DATA!
    getWeatherData();
  };

  const updateSearchBar = (value) => {
    setSearchQuery(value);
  };

  const navigateToDetails = (value) => {
    navigation.navigate("Details", value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          clickHandler={clickHandler}
          updateSearchBar={updateSearchBar}
        ></SearchBar>
      </View>
      <View style={styles.body}>
        {weather === null ? (
          <Text>Du måste söka på något</Text>
        ) : (
          <Text>Kolla vad jag hittade:</Text>
        )}
        {weather && (
          <WeatherList
            weather={weather}
            navigateToDetails={navigateToDetails}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: { flex: 1 },
  body: { flex: 6 },
});
