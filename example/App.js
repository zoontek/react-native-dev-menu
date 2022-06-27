import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import DevMenu from "react-native-dev-menu";

if (__DEV__) {
  DevMenu.addItem("Say Hello", () => alert("Hello!"));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>Please open the developer menu</Text>
  </View>
);
