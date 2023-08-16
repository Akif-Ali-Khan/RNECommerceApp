import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/CategoryDetailScreen';

type RootStackParamList = {
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
}

export default StackNavigator;
