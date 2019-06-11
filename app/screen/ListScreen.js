import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class ListScreen extends React.Component {
    constructor(props) {
        super(props)

    }

    AddTaskScreen() {
        this.props.navigation.navigate('AddTaskScreen')
    }

    confirmDelete=()=>{
        Alert.alert(
            'Alert Title',
            'alertMessage',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: this.onDeleteBTN},
            ],
            { cancelable: false }
          )
    }

    render() {
        return (
            <View style={{ backgroundColor: '#b2ffe0', flex: 1 }}>
                <View style={styles.headerCard}>
                    <View style={{ flexDirection: 'row', flex: 1 }}><Input placeholder={'Add task'} /></View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}><TouchableOpacity onPress={()=> this.AddTaskScreen()}>
                        <Icon name='ios-add-circle' type='ionicon' color='green' />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 15,marginHorizontal: 15,}}>
                    <Text style={{fontSize:25}}>Task List</Text>
                </View>
            <ScrollView>
                <View style={styles.whiteBox}>
                    <View style={{flexDirection:'row',flex:1}}>
                        <Text style={{fontWeight: 'bold'}}> TASK NAME HERE</Text>
                    </View>
                    <View style={{flexDirection:'row',flex:1,}}>
                        <Text style={{opacity:0.3,fontSize:15,}}> 22-June-2019</Text>
                    </View>
                    <View style={{flexDirection:'row',flex:3 }}>
                        <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          It has survived not only five centuries, but also the leap into electronic typesetting,
                           remaining essentially unchanged. It was popularised in the 1960s with the release 
                           of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',paddingRight:15,paddingBottom:10,}}>
                        <View style={{flexDirection: 'row',paddingRight:20,}}><Icon name='ios-trash' type='ionicon' color='red' onPress={this.confirmDelete} /></View>
                        <Icon name='ios-folder' type='ionicon'/>
                    </View>
                </View>
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
    whiteBox:{
    marginHorizontal: 15,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    }
});