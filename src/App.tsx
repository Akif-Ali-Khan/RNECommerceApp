/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
