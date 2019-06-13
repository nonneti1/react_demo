import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

class ModalExample extends Component {
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View>
                <Modal animationType={"slide"} transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}
                    onBackButtonPress={() => this.setState({ modalVisible: null })}
                >

                    <View style={{ backgroundColor: '#b2ffe0', flex: 1 }}>
                        <View style={styles.headerCard}>
                            <Text>{this.props.name}</Text>
                        </View>
                        <View style={styles.whiteBox}>
                            <Text>Date : </Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={this.props.ToggleModalOff}>
                        <View style={{backgroundColor:'#ff2121',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                        <Text style={{color:'#ffff',fontSize:30}}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}
export default ModalExample

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
    },
})