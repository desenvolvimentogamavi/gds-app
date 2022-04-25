import React from 'react';
import {LandingScreen} from '../features';
import {AuthenticationStackParamList} from './interfaces';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{contentStyle: {backgroundColor: '#C4C4C4'}}}>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStackNavigator;
