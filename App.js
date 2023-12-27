//App.js
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { AuthProvider } from "./AuthContext";
import LoadingScreen from "./LoadingScreen";
import GetStartedButton from "./GetStartedButton";
import Logo from "./Logo";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGetStartedClicked, setIsGetStartedClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleGetStartedPress = () => {
    setIsGetStartedClicked(true);
  };

  const onNavigateToSignup = () => {
    setIsSignupClicked(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <LoadingScreen />
        ) : isGetStartedClicked ? (
          isLoggedIn ? (
            <Homepage />
          ) : isSignupClicked ? (
            <Signup onNavigateToLogin={() => setIsSignupClicked(false)} />
          ) : (
            <Login
              onNavigateToSignup={onNavigateToSignup}
              onLogin={handleLogin}
            />
          )
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Logo />
            <GetStartedButton onPress={handleGetStartedPress} />
          </View>
        )}
      </View>
    </AuthProvider>
  );
};

export default App;
