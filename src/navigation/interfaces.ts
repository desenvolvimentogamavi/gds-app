import {NavigatorScreenParams} from '@react-navigation/native';

export type RootParamList = {
  AuthenticationStackNavigator: NavigatorScreenParams<AuthenticationStackParamList>;
};

export type AuthenticationStackParamList = {
  LandingScreen: undefined;
};
