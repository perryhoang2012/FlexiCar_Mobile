import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigators';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={true ? 'dark-content' : 'light-content'} />
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
