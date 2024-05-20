/**
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const queryClient = new QueryClient();

const QueryProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

AppRegistry.registerComponent(appName, () => QueryProvider);
