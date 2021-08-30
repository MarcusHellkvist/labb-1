import React from "react";
import { View, Text } from "react-native";

export default function details({ route }) {
  return (
    <View>
      <Text>{route.params.dt}</Text>
      <Text>{route.params.sunrise}</Text>
      <Text>{route.params.temp.day}</Text>
      <Text>{route.params.pressure}</Text>
      <Text>{route.params.weather[0].main}</Text>
      <Text>{route.params.pop}</Text>
    </View>
  );
}
