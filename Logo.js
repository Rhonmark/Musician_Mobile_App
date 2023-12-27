//Logo.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    marginLeft: 20,
    marginBottom: 80,
  },
  logo: {
    width: 300,
    height: 230,
  },
});

export default Logo;
