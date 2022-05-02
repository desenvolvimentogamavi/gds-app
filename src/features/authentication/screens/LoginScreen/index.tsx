import React, {ReactNode, useContext, memo, useCallback} from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import {Container, Line, Padding, Space} from './styles';
import {ThemeContext} from 'styled-components';
import {Markdown} from '../../../../components';
import Button from '../../../../components/button';
import TextInput from '../../../../components/textInput';
import {useNavigation} from '@react-navigation/native';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export const back = require('../../../../assets/Back.png');

export function ModalLogin({children, closeModal, ...rest}: Props) {
  const {navigate} = useNavigation();

  const navigateFeedScreen = useCallback(() => {
    navigate('FeedStackNavigator', {screen: 'FeedScreen'});
  }, [navigate]);

  const {
    spaces: {x2, x1, x4},
  } = useContext<ITheme>(ThemeContext);

  return (
    <KeyboardAvoidingView behavior="height">
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
                  style={{marginTop: x2, marginLeft: x2, width: x2, height: x4}}
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
                <TextInput withoutBorder={true} placeholder="Login" />
                <Line />
                <TextInput
                  withoutBorder={true}
                  placeholder="Senha"
                  secureTextEntry
                  lockButton={true}
                  autoFocus={false}
                />
              </Padding>

              <Line />
              <Button
                text="ENTRAR"
                textColor="white"
                variant="primary"
                onPress={navigateFeedScreen}
                style={{marginTop: x1}}
              />
            </Container>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
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
    marginTop: 170,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
