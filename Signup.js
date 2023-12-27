//Signup.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";

const Signup = ({ onSignup, onNavigateToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match. Please try again.");
      return;
    }

    if (!email.trim().toLowerCase().endsWith("@gmail.com")) {
      Alert.alert(
        "Error",
        "Please enter a valid Gmail address. Only Gmail addresses are allowed."
      );
      return;
    }

    const formattedEmail = email.trim();

    const userExists = await AsyncStorage.getItem(formattedEmail);
    if (userExists) {
      Alert.alert(
        "Error",
        "User with this email already exists. Please use a different email."
      );
      return;
    }

    const userData = { email: formattedEmail, password };
    await AsyncStorage.setItem(formattedEmail, JSON.stringify(userData));

    Alert.alert(
      "Signup Successful",
      "You can now log in with your new account.",
      [{ text: "OK", onPress: onNavigateToLogin }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header
          isLoginActive={false}
          onLoginPress={onNavigateToLogin}
          onSignupPress={() => {}}
        />
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Confirm Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "#0C2F62",
    borderBottomWidth: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  signupButton: {
    backgroundColor: "#0C2F62",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
    width: 130,
    marginTop: 20,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default Signup;
