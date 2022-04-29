import React from "react";
import { StyleSheet, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppFontWeights from "../config/AppFontWeights";

function AppButtonText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    alignContent: "center",
    alignItems: "center",
    color: AppColors.black,
    fontFamily: AppFonts.default,
    fontSize: 16,
    fontWeight: AppFontWeights.medium,
    justifyContent: "center",
    textTransform: "uppercase",
  },
});

export default AppButtonText;
