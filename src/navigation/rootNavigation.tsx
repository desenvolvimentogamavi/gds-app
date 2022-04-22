import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationStackNavigator from './authStackNavigation';
import {RootParamList} from './interfaces';
import React from 'react';

const Stack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthenticationStackNavigator"
        component={AuthenticationStackNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
