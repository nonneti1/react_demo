import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListItem from './ListItem';


export default class ListScreen extends React.Component {
    static navigationOption = {

    }

    constructor(props) {
        super(props)
        this.state =
            {
                list_todo: [
                    { id: 1, name: "Eat",detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ex leo. Vestibulum cursus viverra nunc ac facilisis. Nulla ut bibendum quam. Pellentesque a sodales ante." },
                    { id: 2, name: "Sleep",detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ex leo. Vestibulum cursus viverra nunc ac facilisis. Nulla ut bibendum quam. Pellentesque a sodales ante." },
                    { id: 3, name: "Dota",detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ex leo. Vestibulum cursus viverra nunc ac facilisis. Nulla ut bibendum quam. Pellentesque a sodales ante." },
                    { id: 4, name: "Eat",detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ex leo. Vestibulum cursus viverra nunc ac facilisis. Nulla ut bibendum quam. Pellentesque a sodales ante." },
                    { id: 5, name: "Sleep",detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ex leo. Vestibulum cursus viverra nunc ac facilisis. Nulla ut bibendum quam. Pellentesque a sodales ante." },
                    { id: 6, name: "Dota",detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ex leo. Vestibulum cursus viverra nunc ac facilisis. Nulla ut bibendum quam. Pellentesque a sodales ante." },
                ]
            }
    }

    TaskViewScreen() {
        this.props.navigation.navigate('TaskViewScreen')
    }

    AddTaskScreen() {
        this.props.navigation.navigate('AddTaskScreen')
    }

    render() {
        return (
            <View style={{ backgroundColor: '#b2ffe0', flex: 1 }}>
                <View style={styles.headerCard}>
                    <View style={{ flexDirection: 'row', flex: 1 }}><Input placeholder={'Add task'} /></View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}><TouchableOpacity onPress={() => this.AddTaskScreen()}>
                        <Icon name='ios-add-circle' type='ionicon' color='green' />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 15, marginHorizontal: 15, }}>
                    <Text style={{ fontSize: 25 }}>Task List</Text>
                </View>
                <ScrollView>
                    <FlatList
                    data={this.state.list_todo}
                    renderItem={({ item }) =><ListItem id={item.id} name={item.name}/>}/>
                    
                </ScrollView>
                
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
    },
    whiteBox: {
        marginHorizontal: 15,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    }
});
