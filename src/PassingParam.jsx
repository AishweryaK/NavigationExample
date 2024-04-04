import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({navigation}) {
//   console.log("home");
  return (
    <View style={styles.container} >
      <Text style={styles.text}> Home Screen </Text>
      <TouchableOpacity 
      onPress={()=> {navigation.navigate("Details", {
        itemID:80,
        something:"this is STRINGGGG",
      }); }}>
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

function DetailsScreen({route ,navigation}) {
    console.log(route);
    const {itemID, something } = route.params ;
    console.log(itemID, typeof(itemID));
    console.log(something, typeof(something));
  
  return (
    <View style={styles.container} >
      <Text style={styles.text}> Details </Text>
      <Text>itemID is {JSON.stringify(itemID)}</Text>
      <Text>text is {JSON.stringify(something)}</Text>

      <TouchableOpacity onPress={() => navigation.push("Home")} >
        <Text style={styles.button}> push home!!
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} >
        <Text style={styles.button}> Navigate to home!
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Details")} >
        <Text style={styles.button}> Navigate to details!
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.push("Details", {itemID: 100})}} >
        <Text style={styles.button}> push details
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} >
        <Text style={styles.button}> Go back.
          </Text></TouchableOpacity>
          <TouchableOpacity 
      onPress={()=> navigation.popToTop()}>
        <Text  style={styles.button}> Pop to home </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.setParams({itemID:"aaaa"})} >
        <Text style={styles.button}> change param
          </Text></TouchableOpacity>
          
    </View>
  )
}

const stack = createNativeStackNavigator();

function PassingParam() {
  return (
    <stack.Navigator initialRouteName="Home">    
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Details" component={DetailsScreen} initialParams={{itemID:0, something:"default"}} />
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

export default PassingParam;