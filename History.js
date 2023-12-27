//History.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const History = ({ onBackPress }) => {
  const bookingHistory = [
    {
      id: 1,
      name: "Sarah Geronimo",
      bio: "The Popstar Royalty",
      genre: "Pop",
      image: require("./assets/Sarah-Geronimo.jpg"),
      rating: 4.7,
      price: "₱200/hour",
      availability: "Oct 1 - Oct 31",
      event: "Live Event Booking",
    },
    {
      id: 2,
      name: "Eraserheads",
      bio: "Legendary Rock Band",
      genre: "Rock",
      image: require("./assets/Eraserheads.jpg"),
      rating: 4.8,
      price: "₱250/hour",
      availability: "Available on weekends",
      event: "Concert Performance",
    },
    {
      id: 3,
      name: "Moira Dela Torre",
      bio: "Singer-Songwriter",
      genre: "Pop",
      image: require("./assets/Moira-Delatorre.jpg"),
      rating: 4.5,
      price: "₱180/hour",
      availability: "Nov 15 - Dec 15",
      event: "Studio Session Recording",
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
      event: "Violin Performance at a Wedding",
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
      event: "Hip-Hop Show in the City",
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
      event: "Hip-Hop Collaboration with Other Artists",
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
      event: "Indie Folk Performance at a Cafe",
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
      event: "Private Acoustic Concert",
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
      event: "Hip-Hop Festival Appearance",
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
      event: "Pop Showcase at a Music Festival",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.bookingItem}>
      <View style={styles.headerContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.artistName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={24} color="#FAC917" />
            <Text style={styles.rating}>Rating: {item.rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.bio}>{item.bio}</Text>
      <Text style={styles.additionalInfo}>
        Genre: {item.genre}
        {"\n"}
        Price: {item.price}
        {"\n"}
        Availability: {item.availability}
        {"\n"}
        Event: {item.event}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Icon name="arrow-back" size={30} color="#0C2F62" />
      </TouchableOpacity>
      <Text style={styles.title}>Booking History</Text>
      <FlatList
        data={bookingHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.historyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 10,
    color: "#333",
  },
  historyList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bookingItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  artistName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0C2F62",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    color: "#FAC917",
  },
  bio: {
    color: "#555",
    marginTop: 5,
  },
  additionalInfo: {
    color: "#555",
    marginTop: 10,
  },
});

export default History;
