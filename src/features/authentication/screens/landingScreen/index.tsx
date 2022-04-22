import React, {useState} from 'react';
import {memo} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, ButtonContainer} from './styles';
import Button from '../../../../components/button';
import {ModalLogin} from '../LoginScreen';

const LandingScreen = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleOpenModal() {
    setOpenModal(true);
  }

  return (
    <Container>
      <Image
        style={styles.img}
        source={require('../../../../assets/logo_cores2.png')}
      />
      <ModalLogin
        visible={openModal}
        closeModal={handleCloseModal}
        children={undefined}
      />
      <ButtonContainer>
        <Button text={'Entrar'} onPress={handleOpenModal} />
      </ButtonContainer>
    </Container>
  );
};

export default memo(LandingScreen);

const styles = StyleSheet.create({
  img: {
    height: 90,
    width: 360,
    alignSelf: 'center',
    marginTop: 30,
  },
});
