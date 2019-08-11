import React, { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TODOS } from '../constants/Utils';
import TodoItem from '../constants/TodoItem';

export default class CompleteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: TODOS,
    };
    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.setState({
          todoList: TODOS,
        })
      }
    );

  };
  render() {
    const { todoList } = this.state;
    return (
      <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleTxt}>Complete List</Text>
            {todoList.map(item => {
                if (item.status === 'Done') {
                  return <TodoItem key={item.id} data={item} />
                }
              })}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

CompleteScreen.navigationOptions = {
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
