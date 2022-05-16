import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button} from '../../../../components';

const ProductValueScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.inside}>
          Botijão P13 {'\n'}
          Valor {'\n'}
          R$ 110,00
        </Text>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <Button text={'Pagar'} />
      </View>
    </View>
  );
};

export default ProductValueScreen;
