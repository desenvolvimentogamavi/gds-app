import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {Image, StyleSheet} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import {FeedScreen} from '../features/authentication';
import {FeedStackParamList} from './interfaces';

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedStackNavigator = () => {
  const {
    color: {blue, white},
    spaces: {x3},
  } = useContext<ITheme>(ThemeContext);

  const options: NativeStackNavigationOptions = {
    title: 'ENTREGADOR',
    headerTitleStyle: {
      fontFamily: 'Arial-Bold',
      fontSize: x3,
      fontWeight: '700',
      color: white,
    },
    headerTintColor: white,
    headerTitleAlign: 'center',
    headerBackVisible: true,

    headerRight: () => (
      <Image
        style={styles.img}
        source={require('../assets/logo_branco1.png')}
      />
    ),
    headerStyle: {
      backgroundColor: blue,
    },
  } as NativeStackNavigationOptions;
  return (
    <Stack.Navigator
      initialRouteName="FeedScreen"
      screenOptions={{contentStyle: {backgroundColor: '#C4C4C4'}}}>
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          ...options,
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 85,
    left: 15,
    alignSelf: 'flex-end',
    // backgroundColor: 'red',
  },
});
