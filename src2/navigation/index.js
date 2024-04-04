import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import ScreenTwo from "../screens/screenTwo";
import ScreenThree from "../screens/screenThree";
import ScreenFour from "../screens/screenFour";
import ScreenFive from "../screens/screenFive";
import ScreenSix from "../screens/screenSix";
import { NAVIGATION } from "../shared/constants";

const stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <stack.Navigator initialRouteName={NAVIGATION.HOME}>    
      <stack.Screen name={NAVIGATION.HOME} component={HomeScreen} />
      <stack.Screen name={NAVIGATION.SCREEN2} component={ScreenTwo} />
      <stack.Screen name={NAVIGATION.SCREEN3} component={ScreenThree} />
      <stack.Screen name={NAVIGATION.SCREEN4} component={ScreenFour} />
      <stack.Screen name={NAVIGATION.SCREEN5} component={ScreenFive} />
      <stack.Screen name={NAVIGATION.SCREEN6} component={ScreenSix} />
    </stack.Navigator>
  );
}

export default StackNavigation;
