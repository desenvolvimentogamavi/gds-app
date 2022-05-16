import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button, Markdown} from '../../../../components';

const ProductValueScreen = () => {
  return (
    <View style={styles.container}>
      <Markdown
        value={'Botijão \nValor \nR$100,00'}
        types="h3"
        color={'blue'}
        style={{fontSize: 38, lineHeight: 60, padding: 25}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <Button text={'Pagar'} />
      </View>
    </View>
  );
};

export default ProductValueScreen;
