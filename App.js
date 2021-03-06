import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import MyContext from "./MyContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MyContext.Provider value={"Created by Marcus Hellkvist"}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Best Weather App 2021" }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: "Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
