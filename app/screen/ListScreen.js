import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList,Modal,ref } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListItem from './ListItem';
import ModalInsert from './ModalInsert';
import ModalEdit from './ModalEdit';


export default class ListScreen extends React.Component {
    static navigationOption = {

    }

    constructor(props) {
        super(props)
        this.state =
            {
                list_todo: [
                    { id: 1, name: "Eat",detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ex leo. Vestibulum cursus viverra nunc ac facilisis. Nulla ut bibendum quam. Pellentesque a sodales ante." },
                    
                ],
                refresherPage:false,
                tempText:null,
                modalVisibleAdd:false,
                modalVisibleEdit:false,
            }
    }
    handleChangeText = (TypedText) => {
        
        this.setState({tempText: TypedText});
        
    }

    temporaryObject = () =>{
        tempObject = {name: this.state.tempText}
        this.setState({
            list_todo: [...this.state.list_todo,tempObject],
        })
        this.ToggleModalAddOff();
        this.setState({tempText:''});
    }

    deleteByIndex=(index)=>{
        this.setState(()=>{
            this.state.list_todo.splice(index,1);
        })
        this.setState({
            refresherPage:!this.state.refresherPage
        })
    }

    TaskViewScreen() {
        this.props.navigation.navigate('TaskViewScreen')
    }

    AddTaskScreen() {
        this.props.navigation.navigate('AddTaskScreen')
    }

    ToggleModalAddOn=()=>{
        this.setState({modalVisibleAdd:true})
        this.FirstInput.clear();
        
    }
    ToggleModalAddOff=()=>{
        this.setState({modalVisibleAdd:false})
    }
    ToggleModalEditOn=()=>{
        this.setState({modalVisibleEdit:true})
    }
    ToggleModalEditOff=()=>{
        this.setState({modalVisibleEdit:false})
    }

    keyExtractor=(item,index)=>{
        return index.toString();
    }

    render() {
        return (
            <View style={{ backgroundColor: '#b2ffe0', flex: 1 }}>
                <View style={styles.headerCard}>
                    <View style={{ flexDirection: 'row', flex: 1 }}><TextInput placeholder={'Add task'} onChangeText={this.handleChangeText} ref={(ref) => { this.FirstInput = ref; }}/></View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}><TouchableOpacity 
                    onPress={()=> this.ToggleModalAddOn()}>
                        <Icon name='ios-add-circle' type='ionicon' color='green' />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 15, marginHorizontal: 15, }}>
                    <Text style={{ fontSize: 25 }}>Task List</Text>
                </View>
                <ScrollView>
                    <FlatList
                    extraData={this.state.refresherPage}
                    data={this.state.list_todo}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item,index }) =><ListItem id={item.id} name={item.name} index={index} deleteByIndex={this.deleteByIndex} ToggleModalEditOn={this.ToggleModalEditOn} />}/>
                    
                </ScrollView>
                <Text>You type : {this.state.text}</Text>
                <ModalInsert  
                extraData =  {this.state}
                modalVisibleAdd={this.state.modalVisibleAdd}
                ToggleModalAddOff={this.ToggleModalAddOff}
                name={this.state.tempText}
                temporaryObject={this.temporaryObject}
                />
                <ModalEdit
                extraData =  {this.state}
                modalVisibleEdit={this.state.modalVisibleEdit}
                ToggleModalEditOff={this.ToggleModalEditOff}
                name={this.state.tempText}
                temporaryObject={this.temporaryObject}
                />
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
