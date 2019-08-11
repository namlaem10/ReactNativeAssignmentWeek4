import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';

const TodoStack = createStackNavigator(
  {
    Todo: TodoScreen,
    TodoDetail: TodoDetailScreen
  },
);

TodoStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-apps'}
    />
  ),
};

TodoStack.path = '';
export default TodoStack;