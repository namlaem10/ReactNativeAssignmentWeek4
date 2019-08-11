import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import CompleteStack from './CompleteStack';
import TodoStack from './TodoStack';
import ActiveStack from './ActiveStack';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const tabNavigator = createBottomTabNavigator({
  TodoStack,
  CompleteStack,
  ActiveStack,
});

tabNavigator.path = '';

export default tabNavigator;
