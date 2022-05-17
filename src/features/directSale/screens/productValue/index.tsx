import {Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {Button, Markdown} from '../../../../components';
import {SelectSaleStackParamList} from '../../../../navigation/interfaces';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const ProductValueScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<SelectSaleStackParamList>>();

  const navigateConfirmPaymentScreen = useCallback(() => {
    navigate('ConfirmPaymentScreen');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Markdown
        value={'Botijão \nValor \nR$110,00'}
        types="h3"
        color={'blue'}
        style={{fontSize: 38, lineHeight: 60, padding: 25}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <Button text={'Pagar'} onPress={navigateConfirmPaymentScreen} />
      </View>
    </View>
  );
};
export default ProductValueScreen;
