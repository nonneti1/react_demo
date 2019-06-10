import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import ListScreen from "../screen/ListScreen"

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Home`,
      }),
    },
    ListScreen: {
        screen: ListScreen,
        navigationOptions: ({ navigation }) => ({
            title: `To do list`,
          }),
    }
  });
  
  export default createAppContainer(AppNavigator);