import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { commonstyles } from "../../shared/styles";
import { NAVIGATION } from "../../shared/constants";

function ScreenFive({navigation}) {
 
  return (
    <View style={commonstyles.container} >
      <Text style={commonstyles.text}> Screen Five </Text>
      <TouchableOpacity 
      onPress={()=> navigation.navigate(NAVIGATION.SCREEN6)}>
        <Text  style={commonstyles.button}> Navigate to 6th Screen</Text>
      </TouchableOpacity>
    </View>
  )
}
export default ScreenFive;