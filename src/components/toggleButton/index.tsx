import React from 'react';
import Markdown from '../markdown';
import {Container, ButtonContainer, Button} from './styles';

type ToggleButton = {
  isActive: boolean;
  title: string;
};

interface toggleButtonProps {
  toggleButtons: ToggleButton[];
}

export function ToggleButton({toggleButtons, ...rest}: toggleButtonProps) {
  return (
    <Container>
      <ButtonContainer>
        {toggleButtons.map(btn => (
          <Button
            key={btn.title}
            {...rest}
            style={btn.isActive && {backgroundColor: '#2075D8'}}>
            <Markdown
              types="h3"
              value={btn.title}
              // color={(btn.isActive) ? 'white' : 'blue'}
              color={'white'}
              style={{
                textAlign: 'center',
              }}
            />
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
}
