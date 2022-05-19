import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RequestStackParamList} from '../../navigation/interfaces';
import {Button, Markdown} from '../../components';

const ConfirmScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RequestStackParamList>>();
  const navigateSuccessScreen = useCallback(() => {
    navigate('SuccessScreen');
  }, [navigate]);

  //   const navigateFeedScreen = useCallback(() => {
  //     navigate('ProductValueScreen');
  //   }, [navigate]);

  return (
    <View style={styles.container}>
      <Markdown
        value={'Confirmar o \npagamento?'}
        types="h1"
        color={'blue'}
        style={{fontSize: 38, lineHeight: 57, padding: 25}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <Button text={'SIM'} onPress={navigateSuccessScreen} />
      </View>
      <View style={{marginBottom: 30}}>
        <Button text={'NÃO'} />
      </View>
    </View>
  );
};
export default ConfirmScreen;
