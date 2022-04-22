import styled, {css} from 'styled-components/native';
interface ILoginScreenProps {
  theme: ITheme;
}

export const Container = styled.View`
  flex: 1;
  ${({
    theme: {
      spaces: {x5, x1},
    },
  }: ILoginScreenProps) => css``}
`;

export const Padding = styled.View`
  ${({
    theme: {
      spaces: {x3},
    },
  }: ILoginScreenProps) => css`
    padding: ${x3}px;
  `}
`;

export const ContentPassword = styled.View`
  flex: 1;
`;
