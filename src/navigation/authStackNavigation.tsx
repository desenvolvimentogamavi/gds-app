import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationStackParamList} from './interfaces';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {LandingScreen} from '../features/authentication';

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationStackNavigator = () => {
  const {
    color: {white, gray},
    spaces: {x2},
  } = useContext<ITheme>(ThemeContext);

  const options: NativeStackNavigationOptions = {
    title: 'Will',
    headerTitleStyle: {
      fontFamily: 'Arial-Bold',
      fontSize: x2,
      fontWeight: 'bold',
      color: gray,
    },
    headerTintColor: gray,
    headerTitleAlign: 'center',
    headerBackVisible: true,
    headerStyle: {
      backgroundColor: white,
    },
  } as NativeStackNavigationOptions;
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
