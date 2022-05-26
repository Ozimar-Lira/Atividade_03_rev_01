import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home/Index.js';
import { Form } from '../screens/Form/Index.js';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Form"
          component={Form}
        />
      </Navigator>
    </NavigationContainer>
  )
}