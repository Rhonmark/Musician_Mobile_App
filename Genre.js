//Genre.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Navbar from "./Navbar";
import MusicianList from "./MusicianList";

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const musicGenres = [
    "POP",
    "ROCK",
    "INDIE",
    "JAZZ",
    "HIPHOP",
    "CLASSICAL",
    "COUNTRY",
    "BLUES",
    "ELECTRONIC",
    "REGGAE",
    "METAL",
    "ALTERNATIVE",
  ];

  const handleGenrePress = (genre) => {
    if (selectedGenre === genre) {
      setSelectedGenre("");
    } else {
      setSelectedGenre(genre);
    }
    setSearchQuery("");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <Navbar onSearch={handleSearch} />

      <View style={styles.container}>
        <View style={styles.genreListContainer}>
          <FlatList
            data={musicGenres}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.genreItem,
                  selectedGenre === item && styles.selectedGenre,
                ]}
                onPress={() => handleGenrePress(item)}
              >
                <Text
                  style={[
                    styles.genreText,
                    selectedGenre === item && styles.selectedGenreText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <MusicianList searchQuery={searchQuery} selectedGenre={selectedGenre} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  genreListContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  genreItem: {
    marginRight: 10,
    padding: 10,
    backgroundColor: "#0C2F62",
    borderRadius: 10,
    alignItems: "center",
  },
  selectedGenre: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#0C2F62",
  },
  genreText: {
    color: "#fff",
    fontSize: 14,
  },
  selectedGenreText: {
    color: "#0C2F62",
    fontWeight: "bold",
  },
});

export default Genre;
