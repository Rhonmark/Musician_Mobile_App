//Header.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Header = ({ isLoginActive, onLoginPress, onSignupPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerButton} onPress={onLoginPress}>
        <Text
          style={[
            styles.headerButtonText,
            isLoginActive && styles.activeButtonText,
          ]}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.headerButton} onPress={onSignupPress}>
        <Text
          style={[
            styles.headerButtonText,
            !isLoginActive && styles.activeButtonText,
          ]}
        >
          SIGNUP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  headerButton: {
    paddingVertical: 10,
    marginHorizontal: 30,
  },
  separator: {
    width: 20,
  },
  headerButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0C2F62",
    textDecorationLine: "none",
  },
  activeButtonText: {
    borderBottomColor: "black",
    borderBottomWidth: 4,
  },
});

export default Header;