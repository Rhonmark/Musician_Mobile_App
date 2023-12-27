//Navbar.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const Navbar = ({ onSearch }) => {
  const [isSortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortOptions = [
    { id: "1", label: "A - Z" },
    { id: "2", label: "Z - A" },
    { id: "3", label: "Rating (High to Low)", icon: "arrow-upward" },
    { id: "4", label: "Rating (Low to High)", icon: "arrow-downward" },
    { id: "7", label: "Price (Low to High)", icon: "arrow-upward" },
    { id: "8", label: "Price (High to Low)", icon: "arrow-downward" },
    { id: "9", label: "Experience (Low to High)", icon: "arrow-upward" },
    { id: "10", label: "Experience (High to Low)", icon: "arrow-downward" },
  ];

  const toggleSortModal = () => {
    setSortModalVisible(!isSortModalVisible);
  };

  const handleSortOptionPress = (option) => {
    setSelectedSortOption(option.label);
    toggleSortModal();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} color="#fff" style={styles.icon} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#fff"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
        <View style={styles.sortContainer}>
          <TouchableOpacity style={styles.sortButton} onPress={toggleSortModal}>
            <Icon name="sort" size={24} color="#fff" style={styles.icon} />
            <Text style={styles.sortText}>Sort By</Text>
          </TouchableOpacity>

          <Modal
            visible={isSortModalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.sortModal}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={toggleSortModal}
                >
                  <Icon name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <FlatList
                  data={sortOptions}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.sortOption}
                      onPress={() => handleSortOptionPress(item)}
                    >
                      <Text style={styles.sortOptionText}>{item.label}</Text>
                      {item.icon && (
                        <Icon
                          name={item.icon}
                          size={16}
                          color="#333"
                          style={{ marginLeft: 8 }}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#0C2F62",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#0C2F62",
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    color: "#fff",
    fontSize: 16,
  },
  sortContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortText: {
    color: "#fff",
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  sortModal: {
    width: "64%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 30,
  },
  backButton: {
    marginBottom: 20,
  },
  sortOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sortOptionText: {
    fontSize: 15,
    color: "#333",
  },
});

export default Navbar;
