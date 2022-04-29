import React from "react";
import { StyleSheet, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";

function AppErrorText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    color: AppColors.errorColor,
    fontFamily: AppFonts.default,
    fontSize: 14,
  },
});

export default AppErrorText;
