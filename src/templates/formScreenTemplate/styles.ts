import styled, {css} from 'styled-components/native';

interface IFormScreenTemplate {
  theme: ITheme;
}

export const Scaffold = styled.View`
  ${({
    theme: {
      spaces: {x3},
    },
  }: IFormScreenTemplate) => css`
    margin: ${x3}px;
  `}
  flex: 1;
  justify-content: space-between;
`;

export const ContentInput = styled.View`
  ${({
    theme: {
      spaces: {x5},
    },
  }: IFormScreenTemplate) => css`
    padding-vertical: ${x5}px;
  `}
  flex: 1;
`;

export const Row = styled.View`
  ${({
    theme: {
      spaces: {x2},
    },
  }: IFormScreenTemplate) => css`
    margin-top: ${x2}px;
  `}
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
