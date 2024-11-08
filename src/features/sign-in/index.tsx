import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SignInStackScreenProps = NativeStackScreenProps<
  Navigation.BaseStackParamList,
  'SignIn'
>;

type SignInStackScreenRouteProp = SignInStackScreenProps['route'];

const SignIn = () => {
  return <View style={styles.container}></View>;
};

export function SignInStackScreen() {
  return <SignIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
