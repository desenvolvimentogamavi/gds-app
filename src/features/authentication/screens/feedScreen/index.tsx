import React, {memo} from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

const FeedScreen = () => {
  return (
    <Container>
      <Text>This Feed Screen</Text>
    </Container>
  );
};

export default memo(FeedScreen);
