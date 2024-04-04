import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { commonstyles } from "../../shared/styles";
import { NAVIGATION } from "../../shared/constants";

function ScreenThree({navigation}) {
  
  return (
    <View style={commonstyles.container} >
      <Text style={commonstyles.text}> Screen Three </Text>
      <TouchableOpacity 
      onPress={()=> navigation.navigate(NAVIGATION.SCREEN5)}>
        <Text  style={commonstyles.button}> Navigate to 5th Screen </Text>
      </TouchableOpacity>
    </View>
  )
}
export default ScreenThree;