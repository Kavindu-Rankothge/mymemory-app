import React from "react";
import { StyleSheet, Text } from "react-native";

import AppFonts from "../config/AppFonts";
import AppFontWeights from "../config/AppFontWeights";

function AppBoldText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.default,
    fontSize: 16,
    fontWeight: AppFontWeights.bold,
  },
});

export default AppBoldText;
