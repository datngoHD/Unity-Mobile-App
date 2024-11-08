import React, { useMemo } from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum LoadingType {
  PROGRESS,
  INDICATOR,
}

export type LoadingPageNavigationProp = NativeStackNavigationProp<
  Navigation.BaseStackParamList,
  'LoadingPage'
>;

export const LoadingPage = () => {
  const route =
    useRoute<RouteProp<Navigation.BaseStackParamList, 'LoadingPage'>>();
  const { message = 'Please wait...', type = LoadingType.INDICATOR } =
    route.params ?? {};

  const renderMessage = useMemo(() => {
    return (
      <Text
        style={{ textAlign: type === LoadingType.PROGRESS ? 'left' : 'center' }}
      >
        {message}
      </Text>
    );
  }, [message, type]);

  return (
    <>
      <ActivityIndicator style={styles.activityIndicator} animating={true} />
      {renderMessage}
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    marginHorizontal: 40,
    borderRadius: 5,
  },
  progressBar: {
    marginTop: 8,
  },
  activityIndicator: {
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});
