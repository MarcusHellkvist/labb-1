import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function details({ route }) {
  return (
    <View style={styles.body}>
      <Text>Weather Details</Text>
      <Text>{route.params.dt}</Text>
      <Text>{route.params.sunrise}</Text>
      <Text>{Math.round(route.params.temp.day)}</Text>
      <Text>{route.params.pressure}</Text>
      <Text>{route.params.weather[0].main}</Text>
      <Text>{route.params.pop}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { backgroundColor: "#ffffff" },
});
