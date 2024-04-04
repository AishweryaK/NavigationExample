import React, { useState, useContext} from "react";
import { View, Text, TouchableOpacity, TextInput,  } from "react-native";
import { commonstyles } from "../../shared/styles";
import { NameContext } from "../../context";
import { NAVIGATION } from "../../shared/constants";



function HomeScreen({navigation}) {

    const data= useContext(NameContext)
    const [name,setName]=useState(data.name)
    const [age,setAge]=useState(data.age.toString())
    // console.log(data,'DATA IN CONTEXT');
    

  return (
    <View style={commonstyles.container} >
      <Text style={commonstyles.text}> Home Screen </Text>
      <TextInput style={commonstyles.input} placeholder="Enter Name" value={name}
      onChangeText={newName=> {
        setName(newName)
        data.setUserData({...data, name:newName})
      }}
      ></TextInput>
      <TextInput style={commonstyles.input} placeholder="Enter Age" value={age}
      onChangeText={newAge => {
        setAge(newAge)
        data.setUserData({...data,age:newAge,})
      }
    }
      ></TextInput>
      <TouchableOpacity 
      onPress={()=> navigation.navigate(NAVIGATION.SCREEN2)}>
        <Text  style={commonstyles.button}> Navigate to 2nd Screen </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=> navigation.push(NAVIGATION.SCREEN3)}>
        <Text  style={commonstyles.button}> Navigate to 3rd Screen</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HomeScreen;