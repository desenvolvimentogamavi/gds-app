import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useCallback, useContext} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import {FeedScreen} from '../features';
import {FeedStackParamList} from './interfaces';

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedStackNavigator = () => {
  const {dispatch} =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  const navigateGoBack = useCallback(() => {
    dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'AuthenticationStackNavigator',
          },
        ],
      }),
    );
  }, [dispatch]);
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
    headerBackVisible: false,
    headerLeft: () => (
      <TouchableOpacity onPress={navigateGoBack}>
        <Image style={styles.back} source={require('../assets/Back.png')} />
      </TouchableOpacity>
    ),
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
        options={{...options}}
      />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 70,
    marginTop: 5,
    left: 15,
    alignSelf: 'flex-end',
    // backgroundColor: 'red',
  },
  back: {
    width: 15,
    height: 30,
    marginTop: 5,
    marginLeft: 8,
  },
});