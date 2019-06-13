import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import ListScreen from "../screen/ListScreen";
import AddTaskScreen from "../screen/AddTaskScreen";
import TaskViewScreen from "../screen/TaskViewScreen";
import ModalExample from "../screen/ModalExample";

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
    },
    AddTaskScreen: {
      screen: AddTaskScreen,
      navigationOptions: ({ navigation }) => ({
          title: `New Task`,
    }),
  },
  TaskViewScreen: {
    screen: TaskViewScreen,
    navigationOptions: ({navigation}) => ({
      title: `Task view`
    }),
  },
  ModalExample:{
    screen: ModalExample,
    navigationOptions: ({navigation}) => ({
      title: `Modal Example`
    })
  }
  
  },
  
  {
    initialRouteName: "ListScreen"
  },
  
  );
  
  export default createAppContainer(AppNavigator);