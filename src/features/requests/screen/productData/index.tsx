import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';

import {Button, Markdown} from '../../../../../components';

const ProductDataScreen = () => {
  return (
    <View style={styles.container}>
      <Markdown
        value={'Botijão P13\nValor \nR$110,00'}
        types="h1"
        color={'blue'}
        style={{fontSize: 32, lineHeight: 48, padding: 23}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        {/* <Button text={'Pagar'} onPress={navigateConfirmPaymentScreen} /> */}
      </View>
    </View>
  );
};
export default ProductDataScreen;
