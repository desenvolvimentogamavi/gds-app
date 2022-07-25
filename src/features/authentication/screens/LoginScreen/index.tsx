import React, {ReactNode, useContext, memo, useCallback, useState} from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

import {Container, Line, Padding} from './styles';
import {ThemeContext} from 'styled-components';
import {Markdown, TextInput} from '../../../../components';
import Button from '../../../../components/button';

import {useNavigation} from '@react-navigation/native';
import { useAuth } from '../../context';
import { api } from '../../../../service/api';
import axios from 'axios';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

interface User {
  codigoRetorno: string
  mensagemRetorno: string;
  payload: {
    access_token: string;
  },
  dataTransacao: string;
}

export const back = require('../../../../assets/Back.png');

export function ModalLogin({children, closeModal, ...rest}: Props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation();

  const navigateFeedScreen = useCallback(() => {
    navigate('FeedStackNavigator', {screen: 'FeedScreen'});
  }, [navigate]);

  const {
    spaces: {x2, x1, x4},
  } = useContext<ITheme>(ThemeContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);
  

  const requestLogin = async () => {
    setLoading(true);
    try {
      const {data, status} = await axios.post('https://gds-api-web.herokuapp.com/sistema/auth/login', {
        login: login,
        senha: password
      });
      console.log('MEU LOG', data)
      if (status === 200) {
        navigateFeedScreen()
      }

    } catch (error: any) {
      Alert.alert('Usuário inválido ou Senha inválida');
    } finally {
      setLoading(false);
    }
  };



  return (
    <Modal
      statusBarTranslucent
      animationType="slide"
      transparent={true}
      {...rest}>
      <View style={styles.container}>
        <View style={styles.outerView}>
          <View style={{flexDirection: 'row', marginTop: x2}}>
            <TouchableWithoutFeedback onPress={closeModal}>
              <Image
                source={back}
                tintColor="#2075D8"
                style={{marginLeft: x2, width: x2, height: x4}}
              />
            </TouchableWithoutFeedback>
          </View>
          <Container>
            <Padding>
              <Markdown
                types="h1"
                value="Para entrar, digite o número da conta e a senha:"
                color="blue"
              />
              <Line />
              <TextInput 
                value={login} 
                onChangeText={text => setLogin(text)} 
                withoutBorder={true} 
                placeholder="Login" 
              />
                <Line />
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                withoutBorder={true}
                placeholder="Senha"
                secureTextEntry
                lockButton={true}
                autoFocus={false}
                keyboardType="numbers-and-punctuation"
              />
            </Padding>

            <Line />
            <Button
              text="ENTRAR"
              textColor="white"
              variant="primary"
              onPress={requestLogin}
              loading={loading}
              style={{marginTop: x1}}
            />
          </Container>
        </View>
      </View>
    </Modal>
  );
}
export default memo(ModalLogin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(192,192,192,0.3)',
  },
  outerView: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    marginTop: 70,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
