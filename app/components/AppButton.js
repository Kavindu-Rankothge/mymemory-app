import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AppButtonText from "./AppButtonText";
import AppColors from "../config/AppColors";

function AppButton({ title, color = "secondaryColor", onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: AppColors[color] }]}>
        <AppButtonText> {title} </AppButtonText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: AppColors.secondaryColor,
    borderColor: AppColors.black,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    paddingVertical: 15,
    width: "100%",
  },
});

export default AppButton;
