import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AllMemoriesScreen from "../screens/AllMemoriesScreen";
import MemorySaveScreen from "../screens/MemorySaveScreen";

const AppStack = createStackNavigator();

const AllMemoryMemorySaveNavigator = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="AllMemoriesSave" component={AllMemoriesScreen} />
    <AppStack.Screen name="MemorySaveScreen" component={MemorySaveScreen} />
  </AppStack.Navigator>
);

export default AllMemoryMemorySaveNavigator;
