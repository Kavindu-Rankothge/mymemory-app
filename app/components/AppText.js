import React from "react";
import { StyleSheet, Text } from "react-native";

import AppFonts from "../config/AppFonts";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.default,
    fontSize: 16,
  },
});

export default AppText;
