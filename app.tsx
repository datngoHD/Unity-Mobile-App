import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import MainNavigation from '@navigation';
import * as NavigationActionsService from '@services/navigation';
import { View, Text } from 'react-native';

export default function App() {
  const navigationRef =
    useNavigationContainerRef<Navigation.MainStackParamList>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        NavigationActionsService.instance().createNavigationRef(navigationRef)
      }
    >
      <MainNavigation />
    </NavigationContainer>
  );
}
