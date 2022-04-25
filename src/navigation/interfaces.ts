import {NavigatorScreenParams} from '@react-navigation/native';

export type RootParamList = {
  AuthenticationStackNavigator: NavigatorScreenParams<AuthenticationStackParamList>;
  FeedStackNavigator: NavigatorScreenParams<FeedStackParamList>;
};

export type AuthenticationStackParamList = {
  LandingScreen: undefined;
};

export type FeedStackParamList = {
  FeedScreen: undefined;
  SelectSaleScreen: undefined;
};
