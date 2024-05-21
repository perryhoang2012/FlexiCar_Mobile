// import {CompositeNavigationProp} from '@react-navigation/native';
// import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Splash: undefined;
  BottomTab: undefined;
};

export type BottomTabNavigatorParamList = {
  BottomTab: RootStackParamList;
  Home: undefined;
  Login: undefined;
  Splash: undefined;
};

// export type HomeScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<RootStackParamList, 'Details'>,
//   BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
// >;
