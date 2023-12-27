//Profile.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useAuth } from "./AuthContext";
import Rated from "./Rated";
import History from "./History";

const Profile = ({ onLogout }) => {
  const { user } = useAuth();
  const [showFavorites, setShowFavorites] = useState(false);
  const [showRated, setShowRated] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleLogout = () => {
    console.log("Log out the app... Go to the Login Page...");
  };

  const handleExit = () => {
    console.log("Exiting the app...");
  };

  const handleHistoryPress = () => {
    setShowHistory(true);
  };

  const handleFavoritesPress = () => {
    setShowFavorites(true);
  };

  const handleRatedPress = () => {
    setShowRated(true);
  };

  const renderContent = () => {
    if (showFavorites) {
      return <Favorites onBackPress={() => setShowFavorites(false)} />;
    }

    if (showRated) {
      return <Rated onBackPress={() => setShowRated(false)} />;
    }

    if (showHistory) {
      return <History onBackPress={() => setShowHistory(false)} />;
    }

    return (
      <>
        <View style={styles.profileHeader}>
          <Icon name="person" size={80} color="#0C2F62" />
          {user && <Text>Email: {user.email}</Text>}
        </View>

        <View style={styles.profileContent}>
          <TouchableOpacity
            style={styles.touchableItem}
            onPress={handleHistoryPress}
          >
            <Icon name="history" size={24} color="#0C2F62" />
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableItem}
            onPress={handleRatedPress}
          >
            <Icon name="star" size={24} color="#0C2F62" />
            <Text style={styles.buttonText}>Rated</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Icon name="exit-to-app" size={24} color="#0C2F62" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <Icon name="close" size={24} color="#0C2F62" />
            <Text style={styles.buttonText}>Exit</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 100,
  },
  profileContent: {
    marginTop: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  exitButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 10,
    color: "#0C2F62",
    fontSize: 18,
  },
  touchableItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Profile;
