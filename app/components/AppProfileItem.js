import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppBoldText from "./AppBoldText";
import AppFontWeights from "../config/AppFontWeights";
import AppText from "./AppText";

function AppProfileItem({ image, username, fullName, memoryNumber }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.image} />
        <AppBoldText>{username}</AppBoldText>
        <AppText>{fullName}</AppText>
      </View>
      <View style={styles.counterContainer}>
        <AppText style={styles.counterNumber}>{memoryNumber}</AppText>
        <AppText style={styles.counterText}>Memories</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
  },
  counterContainer: {
    alignItems: "center",
  },
  image: {
    borderColor: AppColors.black,
    borderRadius: 37,
    borderWidth: 1,
    marginBottom: 10,
    height: 75,
    width: 75,
  },
  counterNumber: {
    fontSize: 70,
  },
  counterText: {
    fontStyle: AppFontWeights.italic,
    fontSize: 14,
    marginTop: -10,
  },
});

export default AppProfileItem;
