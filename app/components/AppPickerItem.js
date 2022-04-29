import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppPickerItem({ onPress, label, icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon name={icon} size={50} />
      {label && <AppText> {label} </AppText>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppPickerItem;
