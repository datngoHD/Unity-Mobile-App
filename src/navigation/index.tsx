import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInStackScreen } from '@features/sign-in';

const MainStack = createNativeStackNavigator<Navigation.MainStackParamList>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false, orientation: 'portrait' }}
      initialRouteName="SignIn"
    >
      <MainStack.Screen name="SignIn" component={SignInStackScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
