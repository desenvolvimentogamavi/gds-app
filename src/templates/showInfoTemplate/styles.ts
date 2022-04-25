import styled, {css} from 'styled-components/native';

interface IFormScreenTemplate {
  theme: ITheme;
}

export const Scaffold = styled.ScrollView`
  flex: 1;
`;

export const BaseView = styled.View`
  ${({
    theme: {
      spaces: {},
    },
  }: IFormScreenTemplate) => css``}
  flex: 1;
  justify-content: space-between;
`;

export const ContentInput = styled.View`
  ${({
    theme: {
      spaces: {x1},
    },
  }: IFormScreenTemplate) => css`
    padding-vertical: ${x1}px;
  `}
  flex: 1;
`;

export const Row = styled.View`
  ${({
    theme: {
      spaces: {x1},
    },
  }: IFormScreenTemplate) => css`
    margin-top: -${x1}px;
  `}
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Margin = styled.View`
  ${({
    theme: {
      spaces: {x1},
    },
  }: IFormScreenTemplate) => css`
    margin-top: ${x1}px;
  `}
`;

export const ContainerMiddle = styled.View`
  flex: 1;
  margin-top: 15px;
  margin: 24px;
`;

export const ContentContainerMiddle = styled.View`
  margin-top: 20px;
`;

export const ContentButton = styled.View`
  margin-bottom: 20px;
`;
