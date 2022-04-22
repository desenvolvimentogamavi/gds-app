import React from 'react';
import {memo} from 'react';
import {Markdown} from '../../../../components';
import {StyleSheet, Image} from 'react-native';
import {Container, ButtonContainer} from './styles';
import Button from '../../../../components/button';

const LandingScreen = () => {
  return (
    <Container>
      <Image
        style={styles.img}
        source={require('../../../../assets/logo_cores2.png')}
      />
      <ButtonContainer>
        <Button text={'Entrar'}/>
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
