import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={30} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.lightColor,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    width: "100%",
  },
  textInput: {
    color: AppColors.black,
    flex: 1,
    fontFamily: AppFonts.default,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AppTextInput;
