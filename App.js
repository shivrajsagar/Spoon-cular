import React from "react";
import { StyleSheet } from "react-native";
import Screens from "./navigation/Screens";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Screens />
    </NavigationContainer>
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
