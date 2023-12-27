//GetStartedButton.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const GetStartedPage = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="event-available"
        size={60}
        color="#0058D6"
        style={styles.icon}
      />
      <Text style={styles.title}>Find Available Musicians</Text>
      <Text style={styles.description}>
        Discover and book talented musicians now!
      </Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F7",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  icon: {
    marginBottom: 20,
    color: "#0C2F62",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666666",
  },
  buttonContainer: {
    backgroundColor: "#0C2F62",
    width: 200,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default GetStartedPage;
