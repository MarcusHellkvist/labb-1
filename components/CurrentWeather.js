import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";

export default function CurrentWeather({ current, location }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardIcon}>
        <Image
          source={{
            uri:
              "http://openweathermap.org/img/wn/" +
              current.weather[0].icon +
              "@2x.png",
          }}
          style={{ width: 75, height: 75 }}
        />
        <Text>{current.weather[0].main}</Text>
      </View>
      <View style={styles.cardText}>
        <Text style={styles.tempText}>{Math.round(current.temp)}°</Text>
        <Text>
          {location.name}, {location.sys.country}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 1,
    margin: 4,
    padding: 16,
  },
  cardIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  forecast: {
    width: 300,
  },
  tempText: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
