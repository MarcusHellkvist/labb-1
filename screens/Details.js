import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import DetailsCard from "../components/DetailsCard";
import About from "../components/About";

export default function details({ route }) {
  return (
    <View style={styles.body}>
      <View style={styles.detailsCard}>
        <DetailsCard item={route.params} />
      </View>
      <View style={styles.about}>
        <About />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { backgroundColor: "#ffffff", flex: 1, flexDirection: "column" },
  detailsCard: { flex: 12 },
  about: { flex: 1, justifyContent: "center", alignSelf: "center" },
});
