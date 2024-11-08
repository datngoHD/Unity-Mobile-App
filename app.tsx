import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { View } from 'react-native';
import MainNavigation from '@navigation';

export default function App() {
  const navigationRef =
    useNavigationContainerRef<Navigation.MainStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <View></View>
    </NavigationContainer>
  );
}
