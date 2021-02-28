import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* import Login from "../screens/Login"; */
import Home from "../screens/Home";
import Cities from "../screens/Cities";
/* import Itineraries from "../screens/Itineraries";
import Register from "../screens/Register"; */

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name="Login" component={Login} /> */}
     
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cities" component={Cities} />
      {/* <Stack.Screen name="Itineraries" component={Itineraries} />
      <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}



export default StackNavigator 