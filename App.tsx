import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from './screens/testScreen';
import TestScreen2 from './screens/testScreen copy';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="test1" component={TestScreen} options={{ headerShown: false }} />
        <Stack.Screen name="test2" component={TestScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
