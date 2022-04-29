import React from "react";
import { Image, StyleSheet, View } from "react-native";

function AppLogo({ size }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ height: size, width: size }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppLogo;
