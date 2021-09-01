import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  SectionList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchBar from "../components/SearchBar";
import WeatherList from "../components/WeatherList";
import CurrentWeather from "../components/CurrentWeather";
import Config from "../config.json";
import About from "../components/About";

export default function Home({ navigation }) {
  const APIKEY = Config.API_TOKEN;
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [code, setCode] = useState(0);

  const getWeatherData = () => {
    setWeather(null);
    setLocation(null);
    setCode(0);
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
        setCode(data.cod);
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
        {weather && location && (
          <View>
            <CurrentWeather current={weather.current} location={location} />
            <WeatherList
              weather={weather}
              navigateToDetails={navigateToDetails}
            />
          </View>
        )}
        {code === "404" && <Text>City not found</Text>}
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
  body: { flex: 12, backgroundColor: "#ffffff" },
});
