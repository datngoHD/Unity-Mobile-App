import React, { useMemo } from 'react';
import {
  Portal,
  Dialog,
  ActivityIndicator,
  ProgressBar,
  Subheading,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
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
      <Subheading
        style={{ textAlign: type === LoadingType.PROGRESS ? 'left' : 'center' }}
      >
        {message}
      </Subheading>
    );
  }, [message, type]);

  const renderLoadingIndicator = useMemo(
    () => (
      <>
        <ActivityIndicator style={styles.activityIndicator} animating={true} />
        {renderMessage}
      </>
    ),
    [renderMessage]
  );

  const renderProgressBar = useMemo(
    () => (
      <>
        {renderMessage}
        <ProgressBar style={styles.progressBar} indeterminate={true} />
      </>
    ),
    [renderMessage]
  );

  const renderWithType = useMemo(() => {
    return type === LoadingType.INDICATOR
      ? renderLoadingIndicator
      : renderProgressBar;
  }, [type, renderLoadingIndicator, renderProgressBar]);

  return (
    <Portal>
      <Dialog visible={true} dismissable={false}>
        <Dialog.Content>{renderWithType}</Dialog.Content>
      </Dialog>
    </Portal>
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
