import React, {memo, useCallback, useContext} from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import {Markdown} from '../../../../components';
import Card from '../../../../components/card';
import {Container, Space} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SelectSaleStackParamList} from '../../../../navigation/interfaces';

const SelectSaleScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<SelectSaleStackParamList>>();

  const navigateProductValueScreen = useCallback(() => {
    navigate('ProductValueScreen');
  }, [navigate]);

  const {
    spaces: {x2, x1, x3},
  } = useContext<ITheme>(ThemeContext);
  return (
    <Container>
      <Markdown
        types="h1"
        color="blue"
        value={'Selecione o Produto'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{textAlign: 'center'}}
      />
      <Space />
      <TouchableNativeFeedback onPress={navigateProductValueScreen}>
        <Card
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            padding: 50,
            paddingHorizontal: x3,
            paddingRight: x3,
            marginTop: x2,
            marginRight: x2,
            borderRadius: x1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          variant="outline">
          <View
            style={{
              paddingRight: x3,
            }}>
            <Markdown types="h3" color="white" value="Botijão P13" />
          </View>
          <Icon name="chevron-right" size={x3} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={navigateProductValueScreen}>
        <Card
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            padding: 50,
            paddingHorizontal: x3,
            paddingRight: x3,
            marginTop: x1,
            marginRight: x2,
            borderRadius: x1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          variant="outline">
          <View
            style={{
              paddingRight: x3,
            }}>
            <Markdown types="h3" color="white" value="Botijão P45" />
          </View>
          <Icon name="chevron-right" size={x3} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback>

      {/* <TouchableNativeFeedback>
        <Card
          style={{
            padding: 50,
            paddingHorizontal: x3,
            paddingRight: x3,
            marginTop: x1,
            marginRight: x2,
            borderRadius: x1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          variant="outline">
          <View
            style={{
              paddingRight: x3,
            }}>
            <Markdown types="h3" color="white" value="Outros" />
          </View>
          <Icon name="chevron-right" size={x2} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback> */}

      {/* <TouchableNativeFeedback>
        <Card
          style={{
            padding: 50,
            paddingHorizontal: x3,
            paddingRight: x3,
            marginTop: x1,
            marginRight: x2,
            borderRadius: x1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          variant="outline">
          <View
            style={{
              paddingRight: x3,
            }}>
            <Markdown types="h3" color="white" value="Cadastrar Clientes" />
          </View>
          <Icon name="chevron-right" size={x2} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback> */}
    </Container>
  );
};

export default memo(SelectSaleScreen);
