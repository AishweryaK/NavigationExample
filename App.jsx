import React from "react";
import { SafeAreaView} from "react-native";
// import BasicStackNav from "./src/BasicStackNav";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src2/navigation";
import { NameProvider } from "./src2/context";
// import PassingParam from "./src/PassingParam";

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NameProvider >
      <NavigationContainer>
        {/* <BasicStackNav /> */}
        {/* <PassingParam/> */}

        <StackNavigation/>
      </NavigationContainer>
       </NameProvider>
       </SafeAreaView>
      
  
  )
}

export default App;