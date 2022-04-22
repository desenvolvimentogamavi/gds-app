import styled, {css} from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
interface ITextInputProps {
  theme: ITheme;
  withoutBorder?: boolean;
  onFocus?: boolean;
  leftBorder?: boolean;
  removeMarginLabelTop?: boolean;
  withoutBackgroundInput?: boolean;
  paddingLeft?: number;
}

export const InputWithMask = styled(TextInputMask)`
  width: 80%;
  ${({
    theme: {
      spaces: {x00},
      color: {blue},
    },
    leftBorder = false,
  }: ITextInputProps) => css`
    color: ${blue};
    font-size: 20px;
    border-left-width: ${leftBorder ? x00 : 0}px;
    border-left-color: ${blue};
    font-family: 'Roboto-Medium';
  `}
`;

export const Input = styled.TextInput`
  width: 80%;
  ${({
    theme: {
      spaces: {x00},
      color: {blue},
    },
    leftBorder = false,
  }: ITextInputProps) => css`
    color: ${blue};
    font-size: 20px;
    border-left-width: ${leftBorder ? x00 : 0}px;
    border-left-color: ${blue};
  `}
`;

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  ${({
    theme: {
      spaces: {x00, x1, x0, x3},
      color: {blue, gray, white},
    },
    withoutBorder,
    onFocus,
    withoutBackgroundInput,
    paddingLeft,
  }: ITextInputProps) => css`
    background-color: ${withoutBackgroundInput ? 'transparent' : white};
    border-color: ${onFocus ? blue : gray};
    padding-horizontal: ${paddingLeft
      ? paddingLeft
      : withoutBorder
      ? x3
      : x1}px;
    border-width: ${withoutBorder ? 0 : x00 / x0}px;
    width: 100%;
    border-radius: ${x0}px;
  `}
`;

export const Label = styled.Text`
  ${({
    theme: {
      spaces: {x1},
      color: {blue, gray},
    },
    onFocus,
    removeMarginLabelTop,
  }: ITextInputProps) => css`
    margin-left: ${removeMarginLabelTop ? 0 : x1}px;
    font-size: 12px;
    color: ${onFocus ? blue : gray};
  `}
`;
