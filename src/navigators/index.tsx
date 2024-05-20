import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from '~models/navigatior';
import HomeScreen from '~screens/HomeScreen/HomeScreen';
import LoginScreen from '~screens/LoginScreen/LoginScreen';
import DarkTheme from '../themes/DarkTheme';
import DefaultTheme from '../themes/DefaultTheme';
import useGeneralStore from '../store/useGeneralStore';

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  const [generalState] = useGeneralStore(state => [state]);

  return (
    <NavigationContainer
      theme={generalState.isDarkMode ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
