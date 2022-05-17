import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {Button, Markdown} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  FeedStackParamList,
  SelectSaleStackParamList,
} from '../../../../navigation/interfaces';

const ConfirmPaymentScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<SelectSaleStackParamList>>();

  const navigateRegistrationSuccessScreen = useCallback(() => {
    navigate('RegistrationSuccessScreen');
  }, [navigate]);

  const navigateFeedScreen = useCallback(() => {
    navigate('FeedStackNavigator', {screen: 'FeedScreen'});
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Markdown
        value={'Confirmar o \npagamento?'}
        types="h3"
        color={'blue'}
        style={{fontSize: 38, lineHeight: 57, padding: 25}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <Button text={'SIM'} onPress={navigateRegistrationSuccessScreen} />
      </View>
      <View style={{marginBottom: 30}}>
        <Button text={'NÃO'} onPress={navigateFeedScreen} />
      </View>
    </View>
  );
};
export default ConfirmPaymentScreen;
