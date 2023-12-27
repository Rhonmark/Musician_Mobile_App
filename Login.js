//Login.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./Header";
import { useAuth } from "./AuthContext";

const Login = ({ onLogin, onNavigateToSignup }) => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    const storedUserData = await AsyncStorage.getItem(email);

    if (!storedUserData) {
      Alert.alert("Error", "User not found. Please sign up.");
      return;
    }

    const userData = JSON.parse(storedUserData);

    if (userData.password !== password) {
      Alert.alert("Error", "Incorrect password. Please try again.");
      return;
    }

    login(email);
    Alert.alert("Login Successful", "You are now logged in.", [
      { text: "OK", onPress: onLogin },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header
          isLoginActive={true}
          onLoginPress={() => {}}
          onSignupPress={onNavigateToSignup}
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

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
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
    marginBottom: 100,
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
  loginButton: {
    backgroundColor: "#0C2F62",
    paddingVertical: 15,
    width: 130,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Login;
