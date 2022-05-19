import {View} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RequestStackParamList} from '../../navigation/interfaces';
import {Button, Markdown} from '../../components';

const ProductDataScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RequestStackParamList>>();
  const navigateConfirmScreen = useCallback(() => {
    navigate('ConfirmScreen');
  }, [navigate]);
  return (
    <View style={styles.container}>
      <Markdown
        value={'Dados do pedido \nValor \nR$110,00'}
        types="h2"
        color={'blue'}
        style={{fontSize: 32, lineHeight: 48, padding: 23}}
      />
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <Button text={'Pagar'} onPress={navigateConfirmScreen} />
      </View>
    </View>
  );
};
export default ProductDataScreen;
