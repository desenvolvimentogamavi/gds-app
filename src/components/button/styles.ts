import styled, {css} from 'styled-components/native';

interface IButton {
  theme: ITheme;
  color?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  withoutBorder?: boolean;
  textColor?: 'orange' | 'gray' | 'blue' | 'black' | 'white';
}

export const Touchable = styled.TouchableNativeFeedback``;

export const Item = styled.View`
  ${({
    theme: {
      color: {orange, white, gray},
      spaces: {x0, x1, x2},
    },
    variant,
    disabled,
    withoutBorder,
  }: IButton) => css`
    margin: 0 23px
    background-color: ${
      variant === 'secondary'
        ? white
        : variant === 'outline'
        ? 'transparent'
        : disabled
        ? '#D1D4D8'
        : orange
    };
    border-color: ${
      variant === 'secondary'
        ? orange
        : variant === 'outline'
        ? gray
        : undefined
    };
    border-radius: ${variant === 'outline' ? x1 : x0}px;
    border-radius: ${variant === 'secondary' ? x1 : x0}px;
    padding: ${withoutBorder ? x2 : x2}px;
    elevation: ${variant === 'outline' ? 0 : withoutBorder ? 8 : 3};
  `}
  align-items: center;
  border-radius: 13px;
`;

export const ContentLoading = styled.View`
  ${({
    theme: {
      spaces: {x00},
    },
  }: IButton) => css`
    padding: ${x00}px;
  `}
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  ${({variant, theme: {color}, textColor, disabled}: IButton) => css`
    color: ${textColor
      ? color[textColor]
      : variant === 'secondary'
      ? color.orange
      : variant === 'outline'
      ? color.black
      : color.white};
    opacity: ${disabled ? 0.5 : 1};
    font-size: 20px;
  `}
  font-family: 'Arial-Bold';
  font-weight: bold;
`;
