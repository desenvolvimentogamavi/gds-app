import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button, Markdown} from '../../../../components';

const ConfirmPaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Markdown
        value={'Confirmar o \npagamento?'}
        types="h3"
        color={'blue'}
        style={{fontSize: 38, lineHeight: 57, padding: 25}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <Button text={'SIM'} />
      </View>
      <View style={{marginBottom: 30}}>
        <Button text={'NÃO'} />
      </View>
    </View>
  );
};
export default ConfirmPaymentScreen;
