import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CompleteScreen from '../screens/CompleteScreen';

const CompleteStack = createStackNavigator(
  {
    Completed: CompleteScreen,
  },
);

CompleteStack.navigationOptions = {
  tabBarLabel: 'Completed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-checkmark-circle-outline'} />
  ),
};

CompleteStack.path = '';
export default CompleteStack;