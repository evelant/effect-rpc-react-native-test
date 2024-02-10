import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import "fastestsmallesttextencoderdecoder";
import { StyleSheet, Text, View } from "react-native";
import "./clients";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
