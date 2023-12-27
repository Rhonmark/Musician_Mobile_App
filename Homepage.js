// Homepage.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";
import Genre from "./Genre";
import Profile from "./Profile";
import MusicianList from "./MusicianList";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteMusicians, setFavoriteMusicians] = useState([]);

  useEffect(() => {
    setSearchQuery("");
  }, [activeTab]);

  const handleToggleFavorite = (musicianId) => {
    setFavoriteMusicians((prevFavorites) => {
      if (prevFavorites.includes(musicianId)) {
        return prevFavorites.filter((id) => id !== musicianId);
      } else {
        return [...prevFavorites, musicianId];
      }
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Navbar onSearch={setSearchQuery} />
            <ScrollView contentContainerStyle={styles.homeContent}>
              <View style={styles.welcomeContainer}>
                <Text style={styles.heading}>Welcome to MusLink</Text>
                <Text style={styles.subheading}>
                  Find the perfect musician for your event ^_^
                </Text>
              </View>
              <MusicianList
                searchQuery={searchQuery}
                favoriteMusicians={favoriteMusicians}
                onToggleFavorite={handleToggleFavorite}
              />
            </ScrollView>
          </>
        );
      case "genre":
        return <Genre favoriteMusicians={favoriteMusicians} />;
      case "profile":
        return <Profile />;
      case "favorites":
        return <Favorites favoriteMusicians={favoriteMusicians} />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderContent()}
      <BottomNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContent: {
    flexGrow: 1,
  },
  welcomeContainer: {
    alignItems: "center",
    padding: 16,
    paddingTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});

export default Homepage;
