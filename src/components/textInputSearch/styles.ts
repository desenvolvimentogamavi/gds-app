import styled, {css} from 'styled-components/native';

interface ITextInputSearchProps {
  theme: ITheme;
}

export const Container = styled.View`
  ${({
    theme: {
      color: {white},
      spaces: {x1},
    },
  }: ITextInputSearchProps) => css`
    background-color: ${white};
    padding-left: ${x1}px;
    border-radius: ${x1}px;
  `}
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  ${({
    theme: {
      color: {blue},
      spaces: {x0},
    },
  }: ITextInputSearchProps) => css`
    color: ${blue};
    font-family: helvetica;
    font-size: 18px;
    margin-left: ${x0}px;
  `}
`;
