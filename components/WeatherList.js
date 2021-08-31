import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

export default function WeatherList({ weather, navigateToDetails }) {
  function WeatherListItem({ item }) {
    return (
      <View style={styles.listItem}>
        <View style={styles.date}>
          <Text>Date</Text>
        </View>
        <View style={styles.icon}>
          <Image
            style={{
              width: 45,
              height: 45,
              resizeMode: "contain",
            }}
            source={{
              uri:
                "http://openweathermap.org/img/wn/" +
                item.weather[0].icon +
                "@2x.png",
            }}
          />
        </View>
        <View style={styles.temp}>
          <View>
            <Text style={styles.tempTextMax}>{Math.round(item.temp.max)}°</Text>
          </View>
          <View>
            <Text style={styles.tempTextMin}>{Math.round(item.temp.min)}°</Text>
          </View>
        </View>
        <View style={styles.rain}>
          {item.rain === undefined ? (
            <Text>0 mm</Text>
          ) : (
            <Text>{item.rain} mm</Text>
          )}
        </View>
        <View style={styles.wind}>
          <Text>{item.wind_speed} m/s</Text>
        </View>
        <View style={styles.arrow}>
          <Text>&gt;</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item) => item.dt.toString()}
        data={weather.daily}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetails(item)}>
            <WeatherListItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 4,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    marginBottom: 4,
    height: 50,
    backgroundColor: "#ffffff",
  },
  date: { flex: 1, alignItems: "center" },
  icon: { flex: 1, alignItems: "center" },
  temp: { flex: 1, alignItems: "center" },
  rain: { flex: 1, alignItems: "center" },
  wind: { flex: 1, alignItems: "center" },
  arrow: { flex: 1, alignItems: "center" },
  tempTextMax: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tempTextMin: {
    fontSize: 13,
  },
});
