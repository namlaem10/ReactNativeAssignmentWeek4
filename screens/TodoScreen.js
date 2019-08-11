import React from 'react';
import { StyleSheet, ImageBackground, Text, View, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { TODOS } from '../constants/Utils';
import TodoItem from '../constants/TodoItem';
import { NavigationEvents } from 'react-navigation';


export default class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: TODOS,
      inputText: ''
    };
  }
  onchange = text => {
    this.setState({
      inputText: text
    });

  }

  onsubmit = () => {
    const { todoList, inputText } = this.state;
    if (inputText == '') {
      return false;
    }
    else {
      const newTodoItem = {
        id: todoList.length + 1,
        status: 'Active',
        body: inputText,
      };
      const newTodoList = [...todoList, newTodoItem];
      this.setState({
        todoList: newTodoList,
        inputText: ''
      });
      this.props.navigation.addListener(
        'willFocus',
        payload => {
          this.setState({
            todoList: newTodoList,
          })
        }
      );
    }
  }
  onPressItem = id => {
    const { todoList } = this.state;
    const todo = todoList.find(todo => todo.id === id);
    this.props.navigation.navigate("TodoDetail", { data: todo, dataList: todoList });
  }
  onLongPressItem = item => {
    const prompt = `"${item.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onDeleteTodo(item.id) }
      ],
      { cancelable: true }
    );
  };
  onDeleteTodo = id => {
    const { todoList } = this.state;
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList.splice(foundIndex, 1);
    this.setState({
      todoList: todoList
    })
  };
  render() {
    const { todoList, inputText } = this.state;
    return (
      <ImageBackground source={require('../assets/images/background.jpg')} style={{width: '100%', height: '100%'}}>
        <KeyboardAvoidingView enabled behavior="position">
          <ScrollView>
            <View style={styles.container}>
              <NavigationEvents onWillFocus={payload => this.setState({ todoList: TODOS, })} />
              <Text style={styles.titleTxt}>Todo List({todoList.length})</Text>
              {todoList.map(item => {
                return (
                  <TodoItem
                    data={item}
                    key={item.id}
                    onLongPressButton={() => this.onLongPressItem(item)}
                    onPressButton={() => this.onPressItem(item.id)}
                  />
                )
              })}
            </View>
            <TextInput style={styles.input} onChangeText={this.onchange} value={inputText} />
            <TouchableOpacity style={styles.btnSubmit} onPress={this.onsubmit}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

TodoScreen.navigationOptions = {
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 15,
    color: 'black',
    alignItems: 'center', 
    width: '90%', 
    alignSelf: 'center'
  },
  titleTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  },
  btnSubmit: {
    height: 50,
    width: 130,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center', 
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
