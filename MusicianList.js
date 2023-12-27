//MusicianList.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";

const MusicianList = ({ searchQuery, selectedGenre }) => {
  const [favorites, setFavorites] = useState([]);
  const [musicians, setMusicians] = useState([
    {
      id: 1,
      name: "Sarah Geronimo",
      bio: "The Popstar Royalty",
      genre: "Pop",
      image: require("./assets/Sarah-Geronimo.jpg"),
      rating: 4.7,
      price: "₱200/hour",
      availability: "Oct 1 - Oct 31",
    },
    {
      id: 2,
      name: "Moira Dela Torre",
      bio: "Singer-Songwriter",
      genre: "Pop",
      image: require("./assets/Moira-Delatorre.jpg"),
      rating: 4.5,
      price: "₱180/hour",
      availability: "Nov 15 - Dec 15",
    },
    {
      id: 3,
      name: "Eraserheads",
      bio: "Legendary Rock Band",
      genre: "Rock",
      image: require("./assets/Eraserheads.jpg"),
      rating: 4.8,
      price: "₱250/hour",
      availability: "Available on weekends",
    },
    {
      id: 4,
      name: "William Flores",
      bio: "Violin Virtuoso",
      genre: "Classical",
      image: require("./assets/William.jpg"),
      rating: 4.3,
      price: "₱220/hour",
      availability: "Nov 10 - Dec 15",
    },
    {
      id: 5,
      name: "Hev Abi",
      bio: "Hiphop Artist",
      genre: "Hiphop",
      image: require("./assets/hevabi.jpg"),
      rating: 4.2,
      price: "₱180/hour",
      availability: "Oct 5 - Nov 5",
    },
    {
      id: 6,
      name: "HELLMERRY",
      bio: "Hiphop Artist",
      genre: "Hiphop",
      image: require("./assets/hellmerry.jpg"),
      rating: 4.0,
      price: "₱200/hour",
      availability: "Nov 20 - Dec 20",
    },
    {
      id: 7,
      name: "Syd Hartha",
      bio: "Indie Folk Singer",
      genre: "INDIE",
      image: require("./assets/Syd-Hartha.jpg"),
      rating: 4.5,
      price: "₱190/hour",
      availability: "Dec 5 - Dec 20",
    },
    {
      id: 8,
      name: "Zack Tabudlo",
      bio: "Singer-Songwriter",
      genre: "Pop",
      image: require("./assets/Zack-Tabudlo.jpg"),
      rating: 4.6,
      price: "₱210/hour",
      availability: "Nov 10 - Nov 30",
    },
    {
      id: 9,
      name: "Shanti Dope",
      bio: "Hiphop Artist",
      genre: "Hiphop",
      image: require("./assets/Shanti-Dope.jpg"),
      rating: 4.4,
      price: "₱190/hour",
      availability: "Nov 1 - Nov 15",
    },
    {
      id: 10,
      name: "Allison Shore",
      bio: "Pop Singer",
      genre: "Pop",
      image: require("./assets/Allison-Shore.jpg"),
      rating: 4.7,
      price: "₱200/hour",
      availability: "Oct 15 - Oct 30",
    },
    {
      id: 11,
      name: "Gloc-9",
      bio: "King of Rap",
      genre: "Hiphop",
      image: require("./assets/GLOC-9.jpeg"),
      rating: 4.5,
      price: "₱180/hour",
      availability: "Nov 5 - Nov 20",
    },
    {
      id: 12,
      name: "Andrew E.",
      bio: "The Godfather of Pinoy Rap",
      genre: "Hiphop",
      image: require("./assets/Andrew-E.jpg"),
      rating: 4.2,
      price: "₱200/hour",
      availability: "Oct 15 - Oct 30",
    },
    {
      id: 13,
      name: "Loonie",
      bio: "Fliptop Champion",
      genre: "Hiphop",
      image: require("./assets/Loonie.jpg"),
      rating: 4.6,
      price: "₱220/hour",
      availability: "Nov 10 - Dec 10",
    },
    {
      id: 14,
      name: "Al James",
      bio: "Hiphop Sensation",
      genre: "Hiphop",
      image: require("./assets/Aljames.jpg"),
      rating: 4.4,
      price: "₱190/hour",
      availability: "Nov 1 - Nov 15",
    },
    {
      id: 17,
      name: "Realest Cram",
      bio: "Hiphop Artist",
      genre: "Hiphop",
      image: require("./assets/Realest.jpg"),
      rating: 4.3,
      price: "₱210/hour",
      availability: "Dec 1 - Dec 15",
    },
    {
      id: 18,
      name: "Smugglaz",
      bio: "Hiphop Royalty",
      genre: "Hiphop",
      image: require("./assets/Smugglaz.jpg"),
      rating: 4.7,
      price: "₱230/hour",
      availability: "Dec 5 - Dec 20",
    },
    {
      id: 19,
      name: "Johnny Alegre",
      bio: "Jazz Guitar Virtuoso",
      genre: "Jazz",
      image: require("./assets/Johnny.jpg"),
      rating: 4.6,
      price: "₱220/hour",
      availability: "Nov 5 - Nov 20",
    },
    {
      id: 20,
      name: "Boy Katindig",
      bio: "Jazz Pianist Extraordinaire",
      genre: "Jazz",
      image: require("./assets/Boy-Katindig.jpg"),
      rating: 4.4,
      price: "₱200/hour",
      availability: "Oct 15 - Oct 30",
    },
    {
      id: 23,
      name: "Rachelle Gerodias",
      bio: "Classical Soprano",
      genre: "Classical",
      image: require("./assets/Rachelle.jpg"),
      rating: 4.9,
      price: "₱280/hour",
      availability: "Dec 1 - Dec 31",
    },
    {
      id: 24,
      name: "Cecile Licad",
      bio: "Pianist and National Artist",
      genre: "Classical",
      image: require("./assets/Cecile-Licad.jpg"),
      rating: 4.7,
      price: "₱260/hour",
      availability: "Nov 20 - Dec 15",
    },
    {
      id: 25,
      name: "Freddie Aguilar",
      bio: "Country Music Legend",
      genre: "Country",
      image: require("./assets/Freddie-Aguilar.jpg"),
      rating: 4.6,
      price: "₱230/hour",
      availability: "Oct 10 - Oct 25",
    },
    {
      id: 26,
      name: "Jun Polistico",
      bio: "Country Singer",
      genre: "Country",
      image: require("./assets/Jun-Polistico.jpg"),
      rating: 4.5,
      price: "₱210/hour",
      availability: "Nov 5 - Nov 30",
    },
    {
      id: 27,
      name: "Kat Agarrado",
      bio: "Blues Vocalist",
      genre: "Blues",
      image: require("./assets/Katt-Agarrado.jpg"),
      rating: 4.2,
      price: "₱180/hour",
      availability: "Nov 10 - Dec 10",
    },
    {
      id: 28,
      name: "Mike Hanopol",
      bio: "Blues Guitarist",
      genre: "Blues",
      image: require("./assets/Mike-Hanopol.jpg"),
      rating: 4.4,
      price: "₱200/hour",
      availability: "Oct 15 - Oct 30",
    },
    {
      id: 29,
      name: "Eyedress",
      bio: "Electronic Music Producer",
      genre: "Electronic",
      image: require("./assets/Eyedress.jpg"),
      rating: 4.1,
      price: "₱190/hour",
      availability: "Dec 1 - Dec 15",
    },
    {
      id: 30,
      name: "Nicolas Vasquez",
      bio: "Electronic Artist",
      genre: "Electronic",
      image: require("./assets/Nicolas-Vasquez.png"),
      rating: 5.3,
      price: "₱2000/hour",
      availability: "Nov 5 - Nov 20",
    },
    {
      id: 31,
      name: "Kokoi Baldo",
      bio: "Reggae Singer",
      genre: "Reggae",
      image: require("./assets/kokoi-baldo.jpg"),
      rating: 4.6,
      price: "₱220/hour",
      availability: "Oct 20 - Nov 10",
    },
    {
      id: 32,
      name: "Missing Filemon",
      bio: "Reggae Band",
      genre: "Reggae",
      image: require("./assets/missing-filemon.jpg"),
      rating: 4.4,
      price: "₱210/hour",
      availability: "Nov 15 - Dec 5",
    },
    {
      id: 33,
      name: "Slapshock",
      bio: "Metal Band",
      genre: "Metal",
      image: require("./assets/Slapshock.jpg"),
      rating: 4.7,
      price: "₱230/hour",
      availability: "Nov 5 - Nov 25",
    },
    {
      id: 34,
      name: "Kamikazee",
      bio: "Metal Band",
      genre: "Metal",
      image: require("./assets/Kamikazee.png"),
      rating: 4.8,
      price: "₱240/hour",
      availability: "Oct 25 - Nov 15",
    },
    {
      id: 35,
      name: "Rivermaya",
      bio: "Alternative Rock Band",
      genre: "Alternative",
      image: require("./assets/Rivermaya.jpg"),
      rating: 4.5,
      price: "₱210/hour",
      availability: "Nov 10 - Nov 30",
    },
    {
      id: 36,
      name: "Silent Sanctuary",
      bio: "Alternative Rock Band",
      genre: "Alternative",
      image: require("./assets/SilentSanctuary.jpg"),
      rating: 4.6,
      price: "₱220/hour",
      availability: "Dec 1 - Dec 15",
    },
  ]);

  useEffect(() => {
    const saveMusiciansToStorage = async () => {
      try {
        await AsyncStorage.setItem("ratedMusicians", JSON.stringify(musicians));
      } catch (error) {
        console.error("Error saving musicians data to AsyncStorage:", error);
      }
    };

    saveMusiciansToStorage();
  }, [musicians]);

  const retrieveMusiciansFromStorage = async () => {
    try {
      const storedMusicians = await AsyncStorage.getItem("ratedMusicians");
      if (storedMusicians) {
        setMusicians(JSON.parse(storedMusicians));
      }
    } catch (error) {
      console.error(
        "Error retrieving musicians data from AsyncStorage:",
        error
      );
    }
  };

  useEffect(() => {
    retrieveMusiciansFromStorage();
  }, []);

  const toggleFavorite = (musicianId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(musicianId)) {
        // If musicianId is already in favorites, remove it and decrease rating
        const updatedFavorites = prevFavorites.filter(
          (id) => id !== musicianId
        );
        setMusicians((prevMusicians) =>
          prevMusicians.map((musician) =>
            musician.id === musicianId
              ? { ...musician, rating: musician.rating - 0.1 }
              : musician
          )
        );
        return updatedFavorites;
      } else {
        // If musicianId is not in favorites, add it and increase rating
        const updatedFavorites = [...prevFavorites, musicianId];
        setMusicians((prevMusicians) =>
          prevMusicians.map((musician) =>
            musician.id === musicianId
              ? { ...musician, rating: musician.rating + 0.1 }
              : musician
          )
        );
        return updatedFavorites;
      }
    });
  };

  const isFavorite = (musicianId) => {
    return favorites.includes(musicianId);
  };

  const filteredMusicians = musicians
    .filter((musician) =>
      musician.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    )
    .filter(
      (musician) =>
        !selectedGenre ||
        musician.genre.toLowerCase() === selectedGenre.toLowerCase()
    );

  return (
    <ScrollView style={styles.container}>
      {filteredMusicians.map((musician) => (
        <TouchableOpacity key={musician.id} style={styles.musicianContainer}>
          <Image source={musician.image} style={styles.musicianImage} />
          <View style={styles.musicianDetails}>
            <Text style={styles.musicianName}>{musician.name}</Text>
            <Text style={styles.musicianBio}>{musician.bio}</Text>
            <Text style={styles.musicianGenre}>{musician.genre}</Text>
            <Text style={styles.musicianAvailability}>
              Availability: {musician.availability}
            </Text>
            <Text style={styles.musicianPrice}>Price: {musician.price}</Text>
            <TouchableOpacity
              style={styles.ratingContainer}
              onPress={() => toggleFavorite(musician.id)}
            >
              <Icon
                name={isFavorite(musician.id) ? "star" : "star-border"}
                size={24}
                color="#0C2F62"
              />
              <Text style={styles.musicianRating}>
                Rating: {musician.rating.toFixed(1)}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#f0f0f0",
  },
  musicianContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    padding: 12,
  },
  musicianImage: {
    width: 130,
    height: 110,
    borderRadius: 20,
    marginTop: 40,
  },
  musicianDetails: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  musicianName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  musicianBio: {
    color: "#555",
    marginTop: 5,
  },
  musicianGenre: {
    color: "#0C2F62",
    marginTop: 5,
  },
  musicianAvailability: {
    color: "#555",
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  musicianRating: {
    marginLeft: 5,
    color: "#0C2F62",
  },
  musicianPrice: {
    color: "#555",
    marginTop: 5,
  },
});

export default MusicianList;
