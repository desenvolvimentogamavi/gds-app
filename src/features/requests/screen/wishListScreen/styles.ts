import styled, {css} from 'styled-components/native';

interface IPayOptionsScreen {
  theme: ITheme;
}

const Container = styled.View`
  width: 100%;
  padding: 0 16px;
  flex: 1;
`;

const Card = styled.TouchableOpacity`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  background-color: #fb7c35;
  align-items: center;
  justify-content: space-between;

  ${({
    theme: {
      spaces: {x2},
    },
  }: IPayOptionsScreen) => css`
    padding: ${x2}px ${x2}px;
  `};
`;

const CardContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

const SearchContainer = styled.View`
  ${({
    theme: {
      spaces: {x3},
    },
  }: IPayOptionsScreen) => css`
    margin: ${x3}px 0;
  `};
`;

const TitleCard = styled.Text`
  font-family: Roboto-Medium;
  font-size: 18px;
  color: #fff;
`;

const TextCard = styled.Text`
  font-family: Roboto-Medium;
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
  /* opacity: 0.5; */
`;

export default {
  Container,
  Card,
  CardContent,
  TitleCard,
  TextCard,
  SearchContainer,
};
