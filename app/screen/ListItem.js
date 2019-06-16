import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Button, Alert, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class ListItem extends Component {
    confirmDelete = () => {
        Alert.alert(
            'Delete task',
            'Are you sure?',
            [
                { text: 'OK', onPress:()=> this.props.deleteByIndex(this.props.index) },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.whiteBox}>
                <View style={{ flexDirection: 'row', flex: 1, paddingTop: 5, }}>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, }}>
                    <Text style={{ opacity: 0.3, fontSize: 15, paddingLeft: 5 }}>{this.props.id}</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 3, paddingLeft: 5 }}>
                    <Text>
                        {this.props.index}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', paddingRight: 15, paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row', paddingRight: 20, }}><TouchableOpacity onPress={this.confirmDelete}><Icon name='ios-trash' type='ionicon' color='red' /></TouchableOpacity></View>
                    <TouchableOpacity onPress={()=>this.props.ToggleModalEditOn(this.props.index)}><Icon name='ios-folder' type='ionicon' /></TouchableOpacity>
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
    },
    whiteBox: {
        marginHorizontal: 15,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    }
});