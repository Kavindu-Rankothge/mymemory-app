import React from "react";
import {} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import AllMemoryMemorySaveNavigator from "./AllMemoryMemorySaveNavigator";
import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import CategoryMemorySaveNavigator from "./CategoryMemorySaveNavigator";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator
    screenOptions={{
      tabBarStyle: { height: 70 },
      tabBarActiveBackgroundColor: AppColors.otherColor,
      tabBarActiveTintColor: AppColors.black,
      headerShown: false,
    }}
  >
    <AppTab.Screen
      name="Account"
      component={AccountScreen}
      options={{ tabBarIcon: () => <AppIcon name="account" /> }}
    />
    <AppTab.Screen
      name="Categories"
      component={CategoryMemorySaveNavigator}
      options={{ tabBarIcon: () => <AppIcon name="menu" /> }}
    />
    <AppTab.Screen
      name="Memories"
      component={AllMemoryMemorySaveNavigator}
      options={{ tabBarIcon: () => <AppIcon name="apps" /> }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
