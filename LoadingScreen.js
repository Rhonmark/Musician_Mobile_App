//LoadingScreen.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/MUSILINK.gif")}
        style={styles.loadingGif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingGif: {
    width: 340,
    height: 340,
  },
});

export default LoadingScreen;