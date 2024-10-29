import React, { useEffect } from 'react';
import { AppState, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavigator from './navigation/AppNavigator';
import { sendLogsToApi, getLogs, clearLogs } from './utils/logger';

const App = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        try {
          const logs = await getLogs();
          if (logs.length > 0) {
            // Send logs to the API
            await sendLogsToApi(logs);
            await clearLogs(); // Clear logs after sending to API
          }
        } catch (error) {
          console.error('Error handling app state change:', error);
        }
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }} testID="app-container">
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;