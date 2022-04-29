import React from "react";
import { StyleSheet, Text } from "react-native";

import AppFonts from "../config/AppFonts";
import AppFontWeights from "../config/AppFontWeights";

function AppTitleText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.title,
    fontSize: 26,
    fontWeight: AppFontWeights.medium,
  },
});

export default AppTitleText;
