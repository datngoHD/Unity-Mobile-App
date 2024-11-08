import { registerRootComponent } from 'expo';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import App from './app';

const RootComponentWrapper = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <App />
    </SafeAreaProvider>
  );
};

registerRootComponent(RootComponentWrapper);
