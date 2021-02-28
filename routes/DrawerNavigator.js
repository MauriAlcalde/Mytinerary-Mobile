import React from "react";
import {View, Text} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNavigator } from "./StackNavigator";
import { CitiesStackNavigator } from "./StackNavigator";
import { ItinerariesStackNavigator } from "./StackNavigator";
import { StackNavigator } from "./StackNavigator";

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={StackNavigator} />
      
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      
      <Drawer.Screen name="Itineraries" component={ItinerariesStackNavigator} />

      <Drawer.Screen name="Cities" component={CitiesStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;