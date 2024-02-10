import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

// polyfillEncoding();
// polyfillFetch();

import "./client";
import { testRpc } from "./client";
export function App() {
  return (
    <View style={styles.container}>
      <Button onPress={testRpc} title="Test Rpc" />
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
