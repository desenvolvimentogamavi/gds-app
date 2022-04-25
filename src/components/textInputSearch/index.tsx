import React, {memo, useContext, useRef} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {ThemeContext} from 'styled-components/native';
import {Container, TextInput} from './styles';

interface ITextInputSearch {
  placeholder?: string;
}

const TextInputSearch = ({placeholder}: ITextInputSearch) => {
  const {
    color: {gray},
    spaces: {x3},
  } = useContext<ITheme>(ThemeContext);
  const refSearch = useRef<any>();
  return (
    <Container>
      <Icon name="search" size={x3} color="#000" />
      <TextInput
        ref={refSearch}
        placeholder={placeholder ?? 'Buscar'}
        placeholderTextColor={gray}
      />
    </Container>
  );
};

export default memo(TextInputSearch);
