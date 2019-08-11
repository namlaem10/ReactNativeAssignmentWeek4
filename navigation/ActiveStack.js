import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ActiveScreen from '../screens/ActiveScreen';

const ActiveStack = createStackNavigator(
  {
    Actives: ActiveScreen,
  },
);

ActiveStack.navigationOptions = {
  tabBarLabel: 'Actives',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-close-circle-outline'} />
  ),
};

ActiveStack.path = '';
export default ActiveStack;