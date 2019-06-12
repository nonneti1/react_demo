import React, { Component } from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity } from 'react-native';
import {Input} from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class TaskViewScreen extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style={{backgroundColor:'#b2ffe0',flex: 1}}>
                <View style={styles.headerCard}>
                <Text>Task view screen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerCard: {
        backgroundColor: '#ffff',
        borderRadius: 5,
        marginTop: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    }
});