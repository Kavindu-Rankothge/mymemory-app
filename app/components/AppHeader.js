import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import AppColors from "../config/AppColors";
import AppIcon from "./AppIcon";
import AppLogo from "./AppLogo";
import AppTitleText from "./AppTitleText";

function AppHeader({ title, icon, onPress }) {
  return (
    <View style={styles.splashLogoContainer}>
      <AppLogo size={50} />
      <AppTitleText style={styles.headerTitle}> {title} </AppTitleText>
      {icon && (
        <View style={styles.icon}>
          <TouchableOpacity onPress={onPress}>
            <AppIcon size={50} name="power" backgroundColor="otherColor" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  splashLogoContainer: {
    backgroundColor: AppColors.otherColor,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerTitle: {
    paddingTop: 5,
    flex: 1,
  },
});

export default AppHeader;
