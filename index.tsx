import { registerRootComponent } from 'expo';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import App from './app';

const RootComponentWrapper = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

registerRootComponent(RootComponentWrapper);
