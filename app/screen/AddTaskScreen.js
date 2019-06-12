import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer } from "react-navigation";
import DatePicker from 'react-native-datepicker';

export default class AddTaskScreen extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={{ backgroundColor: '#b2ffe0', flex: 1 }}>
                <View style={styles.headerCard}>
                    <Text>Task name here</Text>
                </View>
                <View style={styles.whiteBox}>
                    <Text>Date : </Text>
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
        justifyContent: 'center',
    },
    whiteBox: {
        marginHorizontal: 15,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    }
});