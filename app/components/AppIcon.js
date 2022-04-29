import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";

function AppIcon({
  name,
  size = 40,
  iconColor = AppColors.black,
  backgroundColor = AppColors.white,
}) {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor,
        borderRadius: size / 2,
        height: size,
        justifyContent: "center",
        width: size,
      }}
    >
      <MaterialCommunityIcons color={iconColor} name={name} size={size * 0.7} />
    </View>
  );
}

export default AppIcon;
