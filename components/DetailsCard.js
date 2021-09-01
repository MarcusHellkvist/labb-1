import React from "react";

import { StyleSheet, View, Text } from "react-native";

export default function DetailsCard({ item }) {
  return (
    <View style={styles.body}>
      <Text style={styles.headerText}>Weather Details</Text>
      <Text>Sunrise: {item.sunrise}</Text>
      <Text>Sunset: {item.sunset}</Text>
      <Text>
        Temp (morning): {Math.round(item.temp.morn)}° (
        {Math.round(item.feels_like.morn)}°)
      </Text>
      <Text>
        Temp (day): {Math.round(item.temp.day)}° (
        {Math.round(item.feels_like.day)}°)
      </Text>
      <Text>
        Temp (eve): {Math.round(item.temp.eve)}° (
        {Math.round(item.feels_like.eve)}°)
      </Text>
      <Text>
        Temp (night): {Math.round(item.temp.night)}° (
        {Math.round(item.feels_like.night)}°)
      </Text>
      <Text>
        {item.weather[0].main} ({item.weather[0].description})
      </Text>
      <Text>Wind speed:{item.wind_speed} m/s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { padding: 8 },
  headerText: { fontSize: 16, fontWeight: "bold" },
});
