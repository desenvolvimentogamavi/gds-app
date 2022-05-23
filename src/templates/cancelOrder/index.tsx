import {View} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RequestStackParamList} from '../../navigation/interfaces';
import {Button, Markdown} from '../../components';

const CancelOrderScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RequestStackParamList>>();
  const navigateDeregistrationScreen = useCallback(() => {
    navigate('DeregistrationScreen');
  }, [navigate]);

  const navigateFeedScreen = useCallback(() => {
    navigate('OrderDataScreen');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Markdown
        value={'Confirmar o \ncancelamento do \npedido?'}
        types="h1"
        color={'blue'}
        style={{fontSize: 32, lineHeight: 45, padding: 25}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 16}}>
        <Button text={'SIM'} onPress={navigateDeregistrationScreen} />
      </View>
      <View style={{marginBottom: 30}}>
        <Button text={'NÃO'} onPress={navigateFeedScreen} />
      </View>
    </View>
  );
};
export default CancelOrderScreen;
