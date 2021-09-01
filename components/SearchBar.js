import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function SearchBar({ updateSearchBar, clickHandler }) {
  return (
    <View style={styles.header}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search Location"
          onChangeText={updateSearchBar}
        />
      </View>
      <View>
        <Button
          testID="searchButton"
          onPress={clickHandler}
          color="#4062bb"
          title="Search"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ebebeb",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
