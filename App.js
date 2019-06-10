import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.titleText}>All my accounts</Text>
            <Text style={styles.stats}>+</Text>
          </View>
          <Text style={styles.date}>6 June 2019</Text>
        </View>

        <View style={{ padding: 20, }}>
          <LinearGradient
            colors={['#0b243c', '#195187']}
            style={styles.card}>
            <View>
              <View>
                <Image style={{ width: 50, height: 50, marginLeft: 20 }} resizeMode="contain" source={require('./assets/visa_logo.png')} />
                <Image style={{ width: 50, height: 50, marginLeft: 20 }} resizeMode="contain" source={require('./assets/chip.png')} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginTop:-50,paddingBottom:20,marginRight:15, }}>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text style={{ color: '#6df736' }}>Available Balance</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{ color: 'white' }}>$</Text>
                    <Text style={{ color: 'white', fontSize: 23 }}>7,392.00</Text>
                  </View>
                </View>
              </View>
              <View style={styles.creditNum}>
                <Text style={styles.creditNumProps}>42012</Text>
                <Text style={styles.creditNumProps}>3049</Text>
                <Text style={styles.creditNumProps}>2800</Text>
                <Text style={styles.creditNumProps}>9815</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' ,paddingTop:15}}>
              <Text style={{ fontSize: 12, color: '#fff', flex: 1 }}>EXPIRE 02/22</Text>
              <Text style={{ fontSize: 12, color: '#fff' }}>CVC CODE = 230</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.dotMenu}>.</Text>
          <Text style={styles.dotSelected}>.</Text>
          <Text style={styles.dotMenu}>.</Text>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.bodyTitle}>
            <Text style={styles.InExBox}>Income</Text>
            <Text style={styles.InExBox}>Expense</Text>
          </View>
          <View style={styles.bodyContentMoney}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: 'green' }}>↓</Text>
              <Text style={{ alignSelf: 'center', color: 'green' }}>$9,302.00</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: 'red' }}>↑</Text>
              <Text style={{ alignSelf: 'center', color: 'red' }}>
                $2,790.00
          </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.title2}>
            <Text style={{
              marginLeft: 10,
              fontSize: 20,
              flex: 2,
            }}>Detail of movements</Text>
            <View style={{ marginRight: 10, }}><Icon name='md-calendar' type='ionicon' /></View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{ width: 30, height: 30, flex: 1 }} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15 }}>Restaurant Manhattan</Text>
                <View>
                  <Text style={{ opacity: 0.3 }}>7 June 2019</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 7, color: 'red' }}>$180</Text>
                <Text style={{ fontSize: 20, color: 'red' }}>↑</Text>
              </View>
            </View>
          </View>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{ width: 30, height: 30, flex: 1 }} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15 }}>Gasoline</Text>
                <View>
                  <Text style={{ opacity: 0.3 }}>6 June 2019</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 7, color: 'red' }}>$100</Text>
                <Text style={{ fontSize: 20, color: 'red' }}>↑</Text>
              </View>
            </View>
          </View>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{ width: 30, height: 30, flex: 1 }} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15 }}>Salary Deposit</Text>
                <View>
                  <Text style={{ opacity: 0.3 }}>5 June 2019</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 7, color: 'green' }}>$12000</Text>
                <Text style={{ fontSize: 20, color: 'green' }}>↓</Text>
              </View>
            </View>
          </View>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{ width: 30, height: 30, flex: 1 }} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15 }}>Restaurant Manhattan</Text>
                <View>
                  <Text style={{ opacity: 0.3 }}>7 June 2019</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 7, color: 'red' }}>$180</Text>
                <Text style={{ fontSize: 20, color: 'red' }}>↑</Text>
              </View>
            </View>
          </View>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{ width: 30, height: 30, flex: 1 }} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15 }}>Restaurant Manhattan</Text>
                <View>
                  <Text style={{ opacity: 0.3 }}>7 June 2019</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 7, color: 'red' }}>$180</Text>
                <Text style={{ fontSize: 20, color: 'red' }}>↑</Text>
              </View>
            </View>
          </View>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{ width: 30, height: 30, flex: 1 }} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15 }}>Restaurant Manhattan</Text>
                <View>
                  <Text style={{ opacity: 0.3 }}>7 June 2019</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 7, color: 'red' }}>$180</Text>
                <Text style={{ fontSize: 20, color: 'red' }}>↑</Text>
              </View>
            </View>
          </View>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{ width: 30, height: 30, flex: 1 }} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15 }}>Restaurant Manhattan</Text>
                <View>
                  <Text style={{ opacity: 0.3 }}>7 June 2019</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 7, color: 'red' }}>$180</Text>
                <Text style={{ fontSize: 20, color: 'red' }}>↑</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  balance: {
    alignItems: 'flex-end', flex: 1
  },
  creditNumProps: {
    color: '#fff', fontSize: 20, fontWeight: 'bold',
  },
  InExBox: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 15,
    fontSize: 15,
  },
  dotSelected: {
    paddingHorizontal: 3,
    fontSize: 60,
    marginTop: -65,
  },
  bodyContentMoney: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 65,
    marginTop: 20,
  },
  dotMenu: {
    paddingHorizontal: 3,
    fontSize: 60,
    marginTop: -65,
    opacity: 0.3,
  },
  bodyContent: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#ffff',
    paddingBottom: 20,

  },
  creditNum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 25
  },
  card: {
    borderRadius: 10,
    padding: 10,
    width: 400,
    height: 200,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#e8e5e5',
    flex: 1,

  },
  header: {
    marginHorizontal: 15,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  bodyTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
    marginTop: 20,

  },
  title2: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleDetail: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    marginLeft: 10,
    fontSize: 20,
    flex: 2,
    fontWeight: 'bold',
  },
  stats: {
    marginRight: 10,
  },
  date: {
    fontSize: 13,
    marginLeft: 10,
  },
  num: {
    color: '#ffff'
  }


});
