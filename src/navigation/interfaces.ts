import {NavigatorScreenParams} from '@react-navigation/native';

export type RootParamList = {
  AuthenticationStackNavigator: NavigatorScreenParams<AuthenticationStackParamList>;
  FeedStackNavigator: NavigatorScreenParams<FeedStackParamList>;
  SelectSaleStackNavigator: NavigatorScreenParams<SelectSaleStackParamList>;
  RequestStackNavigator: NavigatorScreenParams<RequestStackParamList>;
};

export type AuthenticationStackParamList = {
  LandingScreen: undefined;
};

export type FeedStackParamList = {
  FeedScreen: undefined;
  SelectSaleScreen: undefined;
};

export type SelectSaleStackParamList = {
  SelectSaleScreen: undefined;
};

export type RequestStackParamList = {
  WishListScreen: undefined;
};
