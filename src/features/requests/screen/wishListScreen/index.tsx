import React, {useCallback, useContext, useState} from 'react';
import {FlatList, View} from 'react-native';
import Styled from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ToggleButton} from '../../../../components/toggleButton';
import {withTiming, Easing, useSharedValue} from 'react-native-reanimated';
import {ThemeContext} from 'styled-components/native';

const WishListScreen = () => {
  const {
    spaces: {x2},
    color: {white},
  } = useContext<ITheme>(ThemeContext);
  const [pos, setPos] = useState(false);

  // const offset = useSharedValue(0);

  // const handleSetPositionToogle = useCallback(() => {
  //   setPos(!pos);
  //   setToggleButtons([
  //     {
  //       isActive: pos,
  //       title: 'Buscar',
  //     },
  //     {
  //       isActive: !pos,
  //       title: 'Ordem',
  //     },
  //     {
  //       isActive: pos,
  //       title: 'Tipo',
  //     },
  //   ]);

  //   offset.value = withTiming(pos ? 0 : 154, {
  //     duration: 500,
  //     easing: Easing.out(Easing.exp),
  //   });
  // }, [pos, offset]);

  const [toggleButtons, setToggleButtons] = useState([
    {
      isActive: true,
      title: 'Buscar',
    },
    {
      isActive: false,
      title: 'Nome',
    },
    {
      isActive: false,
      title: 'Bairro',
    },
  ]);
  const items = [
    {
      id: 1,
      title: 'André',
      amount: 'P13',
      description: 'Bairro: Boqueirão',
    },
    {
      id: 2,
      title: 'Carlos',
      amount: 'P45',
      description: 'Bairro: Alto Boqueirão',
    },
    {
      id: 3,
      title: 'Ariane',
      amount: 'P13',
      description: 'Bairro: Uberaba',
    },
    {
      id: 4,
      title: 'Maria',
      amount: 'P13',
      description: 'Bairro: Xaxim',
    },
    {
      id: 5,
      title: 'Pedro',
      amount: 'P45',
      description: 'Bairro: Alto Boqueirão',
    },
    {
      id: 6,
      title: 'Brian',
      amount: 'P13',
      description: 'Bairro: Xaxim',
    },
    {
      id: 7,
      title: 'Carlos',
      amount: 'P45',
      description: 'Bairro: São José dos Pinhais',
    },
    {
      id: 8,
      title: 'Fabiano',
      amount: 'P13',
      description: 'Bairro: Uberada',
    },
    {
      id: 9,
      title: 'Caio',
      amount: 'P45',
      description: 'Bairro: Boqueirão',
    },
  ];

  return (
    <Styled.Container>
      <ToggleButton
        // onPress={}
        toggleButtons={toggleButtons}
      />
      <Styled.SearchContainer>
        {/* <TextInputSearch placeholder="Buscar" /> */}
      </Styled.SearchContainer>
      <FlatList
        data={items}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Styled.Card>
            <Styled.CardContent>
              <View>
                <Styled.TitleCard>{item.title}</Styled.TitleCard>
                <Styled.TextCard>{item.description}</Styled.TextCard>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Styled.TitleCard>{item.amount}</Styled.TitleCard>
              </View>
            </Styled.CardContent>
            <Icon
              name="chevron-right"
              style={{paddingLeft: x2}}
              size={22}
              color={white}
            />
          </Styled.Card>
        )}
      />
    </Styled.Container>
  );
};

export default WishListScreen;