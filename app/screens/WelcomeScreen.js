import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppLogo from "../components/AppLogo";
import AppScreen from "../components/AppScreen";
import AppTitleText from "../components/AppTitleText";

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.splashLogoContainer}>
        <AppLogo size={200} />
        <AppTitleText> Welcome </AppTitleText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Log in"
          color="primaryColor"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Sign up"
          color="otherColor"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  splashLogoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    alignSelf: "center",
    flexDirection: "column",
    height: 150,
    justifyContent: "space-evenly",
    width: "70%",
  },
});

export default WelcomeScreen;
