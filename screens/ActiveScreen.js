import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import TodoItem from '../constants/TodoItem';
import { db } from './TodoScreen';

let itemsRef = db.ref('/TodoList');

export default class ActiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        itemsRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let todoList = Object.values(data);
          this.setState({ todoList });
        });
      }
    );
  };
  // componentDidMount() {
  //   itemsRef.on('value', (snapshot) => {
  //     let data = snapshot.val();
  //     let todoList = Object.values(data);
  //     this.setState({ todoList });
  //   });
  // }
  render() {
    const { todoList } = this.state;
    return (
      <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleTxt}>Active List</Text>
            {todoList.map(item => {
              if (item.status === 'Active') {
                return <TodoItem key={item.id} data={item} />
              }
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
ActiveScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#333333',
  },
  titleTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  },
});