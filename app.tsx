import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { View, Text } from 'react-native';
import MainNavigation from '@navigation';

export default function App() {
  const navigationRef =
    useNavigationContainerRef<Navigation.MainStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Unity Mobile App</Text>
      </View>
    </NavigationContainer>
  );
}
