import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppBoldText from "./AppBoldText";
import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppListItem({
  image,
  title,
  subtitle,
  IconComponent,
  onPress,
  onSwipeLeft,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={onSwipeLeft}
        overshootLeft={false}
        overshootRight={false}
      >
        <TouchableHighlight
          onPress={onPress}
          underlayColor={AppColors.secondaryColor}
        >
          <View style={styles.container}>
            {IconComponent}
            {isFinite(image)
              ? image && <Image source={image} style={styles.image} />
              : image && <Image source={{ uri: image }} style={styles.image} />}
            <View style={styles.textContainer}>
              <AppBoldText>{title}</AppBoldText>
              {subtitle && <AppText>{subtitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.tertiaryColor,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 20,
  },
});

export default AppListItem;
