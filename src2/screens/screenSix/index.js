import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { commonstyles } from "../../shared/styles";
import { NameContext } from "../../context";

function ScreenSix({navigation}) {
    const data = useContext(NameContext);
    // console.log(data)

  return (
    <View style={commonstyles.container} >
      <Text style={commonstyles.text}> Screen Six </Text>
      <Text> name : {data.name} </Text>
      <Text> age : {data.age} </Text>
      <TouchableOpacity 
      onPress={()=> navigation.popToTop()}>
        <Text  style={commonstyles.button}> Navigate to Home </Text>
      </TouchableOpacity>
    </View>
  )
}
export default ScreenSix;