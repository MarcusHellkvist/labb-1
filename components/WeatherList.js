import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function WeatherList({ weather, navigateToDetails }) {
  function WeatherListItem({ item }) {
    return (
      <View>
        <Text>{item.temp.day}</Text>
      </View>
    );
  }

  return (
    <View>
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
