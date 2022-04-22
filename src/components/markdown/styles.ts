import styled, {css} from 'styled-components/native';

interface IMarkdownProps {
  theme: ITheme;
  colorSelected?: 'gray' | 'blue' | 'black' | 'white' | 'orange';
  fontSize?: 16 | 18 | 20 | 22;
}

export const Text = styled.Text`
  ${({theme: {color}, colorSelected, fontSize}: IMarkdownProps) => css`
    color: ${color[colorSelected ? colorSelected : 'black']};
    font-family: 'calibri';
  `}
`;
