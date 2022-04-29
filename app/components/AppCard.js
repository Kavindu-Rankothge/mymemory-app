import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import AppBoldText from "./AppBoldText";
import AppButton from "./AppButton";
import AppText from "./AppText";

function AppCard({
  image,
  title,
  subtitle,
  category,
  date,
  editPress,
  deletePress,
}) {
  return (
    <View style={styles.container}>
      {isFinite(image)
        ? image && <Image source={image} style={styles.image} />
        : image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.detailContainer}>
        <AppBoldText> {category} </AppBoldText>
        <AppText> {date} </AppText>
      </View>
      <View style={styles.textContainer}>
        <AppBoldText>{title}</AppBoldText>
        <AppText>{subtitle}</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.saveButton}>
          <AppButton color="primaryColor" title="Edit" onPress={editPress} />
        </View>
        <View style={styles.exitButton}>
          <AppButton color="otherColor" title="Delete" onPress={deletePress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: AppColors.tertiaryColor,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  textContainer: {
    marginHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  detailContainer: {
    padding: 10,
    backgroundColor: AppColors.otherColor,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingBottom: 20,
  },
  saveButton: {
    width: "25%",
  },
  exitButton: {
    width: "25%",
  },
});

export default AppCard;
