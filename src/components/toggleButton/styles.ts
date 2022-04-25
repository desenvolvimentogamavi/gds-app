import styled, {css} from 'styled-components/native';
interface IToggleButton {
  theme: ITheme;
}

export const Container = styled.View`
  ${({
    theme: {
      spaces: {x2},
    },
  }: IToggleButton) => css`
    paddingtop: ${x2}px;
  `}
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;
export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  display: flex;
  background: rgba(0, 0, 102, 0.4);
  flex: 1;
  padding: 8px 5px;
  margin: 0 4px;
`;
