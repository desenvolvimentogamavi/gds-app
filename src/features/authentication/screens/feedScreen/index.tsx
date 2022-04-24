import React, {memo, useContext} from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeContext} from 'styled-components/native';
import {Markdown} from '../../../../components';
import Card from '../../../../components/card';

import {Container} from './styles';

const FeedScreen = () => {
  const {
    spaces: {x2, x1, x3},
  } = useContext<ITheme>(ThemeContext);
  return (
    <Container>
      <TouchableNativeFeedback>
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
            <Markdown types="h3" color="white" value="PEDIDO" />
          </View>
          <Icon name="chevron-right" size={x2} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
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
            <Markdown types="h3" color="white" value="VENDA DIRETA" />
          </View>
          <Icon name="chevron-right" size={x2} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
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
            <Markdown types="h3" color="white" value="STATUS GERAL" />
          </View>
          <Icon name="chevron-right" size={x2} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
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
            <Markdown types="h3" color="white" value="RESUMO" />
          </View>
          <Icon name="chevron-right" size={x2} color={'#fff'} />
        </Card>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default memo(FeedScreen);
