import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator
    initialRouteName="Welcome"
    screenOptions={{ headerShown: false }}
  >
    <AppStack.Screen name="Login" component={LoginScreen} />
    <AppStack.Screen name="Welcome" component={WelcomeScreen} />
    <AppStack.Screen name="Register" component={RegisterScreen} />
    <AppStack.Screen name="AuthAccount" component={TabNavigator} />
  </AppStack.Navigator>
);

export default AuthNavigator;
