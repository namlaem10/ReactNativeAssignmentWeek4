import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TodoItem extends Component {
  render() {
    const { data: { body, status }, onPressButton, onLongPressButton } = this.props;
    const btnStyle = status === 'Active' ? styles.activeBtn : styles.doneBtn
    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={onPressButton}
        onLongPress={onLongPressButton} >
        <Text style={styles.text}> {body} </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  activeBtn: {
    marginTop: 15,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  doneBtn: {
    marginTop: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
})
