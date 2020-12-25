import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./Screens/Home";
import Search from "./Screens/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Search />
    </View>
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
