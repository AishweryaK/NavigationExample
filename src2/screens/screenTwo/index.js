import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { commonstyles } from "../../shared/styles";
import { NAVIGATION } from "../../shared/constants";

function ScreenTwo({navigation}) {
  return (
    <View style={commonstyles.container} >
      <Text style={commonstyles.text}> Screen two </Text>
      <TouchableOpacity 
      onPress={()=> navigation.navigate(NAVIGATION.SCREEN4)}>
        <Text  style={commonstyles.button}> Navigate to 4th Screen </Text>
      </TouchableOpacity>
    </View>
  )
}
export default ScreenTwo;