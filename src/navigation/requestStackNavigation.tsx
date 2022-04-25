import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useCallback, useContext} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import OrderDataScreen from '../features/requests/screen/orderDataScreen';
import WishListScreen from '../features/requests/screen/wishListScreen';
import {RequestStackParamList} from './interfaces';

const Stack = createNativeStackNavigator<RequestStackParamList>();

const RequestStackNavigator = () => {
  const {dispatch} =
    useNavigation<NativeStackNavigationProp<RequestStackParamList>>();

  const navigateGoBack = useCallback(() => {
    dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'FeedStackNavigator',
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
    title: 'PEDIDOS',
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
      initialRouteName="WishListScreen"
      screenOptions={{contentStyle: {backgroundColor: '#C4C4C4'}}}>
      <Stack.Screen
        name="WishListScreen"
        component={WishListScreen}
        options={{...options}}
      />
      <Stack.Screen
        name="OrderDataScreen"
        component={OrderDataScreen}
        options={{...options}}
      />
    </Stack.Navigator>
  );
};

export default RequestStackNavigator;

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
