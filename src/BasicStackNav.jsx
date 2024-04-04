import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({navigation}) {
  console.log("home");
  return (
    <View style={styles.container} >
      <Text style={styles.text}> Home Screen </Text>
      <TouchableOpacity 
      onPress={()=> navigation.navigate("Details")}>
        <Text  style={styles.button}> Navigate to Details </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=> navigation.push("Details")}>
        <Text  style={styles.button}> Push details </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=> navigation.push("Home")}>
        <Text  style={styles.button}> Push home </Text>
      </TouchableOpacity>
    </View>
  )
}

function DetailsScreen({navigation}) {
  console.log("Details");
  return (
    <View style={styles.container} >
      <Text style={styles.text}> Details </Text>

      <TouchableOpacity onPress={() => navigation.push("Home")} >
        <Text style={styles.button}> push home!!
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} >
        <Text style={styles.button}> Navigate to home!
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Details")} >
        <Text style={styles.button}> Navigate to details!
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push("Details")} >
        <Text style={styles.button}> push details
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} >
        <Text style={styles.button}> Go back.
          </Text></TouchableOpacity>
          <TouchableOpacity 
      onPress={()=> navigation.popToTop()}>
        <Text  style={styles.button}> Pop to home </Text>
      </TouchableOpacity>
          
    </View>
  )
}

const stack = createNativeStackNavigator();

function BasicStackNav() {
  return (
    <stack.Navigator initialRouteName="Home">    
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Details" component={DetailsScreen} />
    </stack.Navigator>
  );
}

const styles=StyleSheet.create(
  {
    container: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    text : {
      color:"black"
    },
      button : {
      color: "blue"
    }
  }
)

export default BasicStackNav;