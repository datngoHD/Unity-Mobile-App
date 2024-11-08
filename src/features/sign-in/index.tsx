import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as NavigationActionsService from '@services/navigation';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => {
          NavigationActionsService.instance().showLoading();
          setTimeout(
            () => NavigationActionsService.instance().hideLoading(),
            3000
          );
        }}
      >
        Sign In
      </Button>
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
    // alignItems: 'center',
  },
});
