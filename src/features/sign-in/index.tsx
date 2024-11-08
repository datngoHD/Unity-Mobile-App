import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as NavigationActionsService from '@services/navigation';

type SignInStackScreenProps = NativeStackScreenProps<
  Navigation.BaseStackParamList,
  'SignIn'
>;

type SignInStackScreenRouteProp = SignInStackScreenProps['route'];

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Unity Mobile App</Text>
      <TouchableOpacity
        onPress={() => {
          NavigationActionsService.instance().showLoading();
        }}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export function SignInStackScreen() {
  return <SignIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
