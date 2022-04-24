import React, {memo, ReactNode} from 'react';
import {ViewProps} from 'react-native';
import {Container} from './styles';

interface ICard extends ViewProps {
  background?: string;
  elevation?: number;
  variant?: 'outline';
  children: ReactNode;
}

const Card = ({
  background,
  variant,
  children,
  elevation = 0,
  ...rest
}: ICard) => {
  return (
    <Container
      {...rest}
      elevation={elevation}
      variant={variant}
      background={background}>
      {children}
    </Container>
  );
};

export default memo(Card);
