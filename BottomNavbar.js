//BottomNavbar.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BottomNavbar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab("home")}>
        <Icon
          name="home"
          size={24}
          color={activeTab === "home" ? "#0C2F62" : "#888"}
        />
        <Text style={{ color: activeTab === "home" ? "#0C2F62" : "#888" }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab("genre")}
      >
        <Icon
          name="music-note"
          size={24}
          color={activeTab === "genre" ? "#0C2F62" : "#888"}
        />
        <Text style={{ color: activeTab === "genre" ? "#0C2F62" : "#888" }}>
          Genre
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab("profile")}
      >
        <Icon
          name="person"
          size={24}
          color={activeTab === "profile" ? "#0C2F62" : "#888"}
        />
        <Text style={{ color: activeTab === "profile" ? "#0C2F62" : "#888" }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 3,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    alignItems: "center",
  },
});

export default BottomNavbar;
