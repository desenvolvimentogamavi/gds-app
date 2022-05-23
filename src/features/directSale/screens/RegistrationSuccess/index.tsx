import {View} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {Button, Markdown} from '../../../../components';
import {CommonActions, useNavigation} from '@react-navigation/native';

const RegistrationSuccessScreen = () => {
  const {dispatch} = useNavigation();

  const navigateToOrderDataScreen = useCallback(() => {
    dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'FeedStackNavigator',
          },
        ],
      }),
    );
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Markdown
        value={'Registro efetuado com\nsucesso.'}
        types="h1"
        color={'blue'}
        style={{fontSize: 32, lineHeight: 45, padding: 25}}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          marginBottom: 30,
        }}>
        <Button text={'Voltar ao menu'} onPress={navigateToOrderDataScreen} />
      </View>
    </View>
  );
};
export default RegistrationSuccessScreen;
