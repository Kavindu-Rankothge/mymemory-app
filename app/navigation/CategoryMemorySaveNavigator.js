import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import MemorySaveScreen from "../screens/MemorySaveScreen";

const AppStack = createStackNavigator();

const CategoryMemorySaveNavigator = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="CategorySave" component={CategoriesScreen} />
    <AppStack.Screen name="MemorySaveScreen" component={MemorySaveScreen} />
  </AppStack.Navigator>
);

export default CategoryMemorySaveNavigator;
