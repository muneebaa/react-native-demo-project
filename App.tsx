/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';
import ToastHost from './src/components/ToastHost';
import { setCredentials, updateUser } from './src/store/authSlice';
import { initializeNetworkListener } from './src/services/network';
import { loadAuthState } from './src/services/authStorage';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    let unsubscribeNetwork: (() => void) | undefined;

    const bootstrap = async () => {
      try {
        // Restore auth state from storage if available
        const storedAuth = await loadAuthState();
        if (
          storedAuth &&
          storedAuth.accessToken &&
          storedAuth.refreshToken &&
          storedAuth.user
        ) {
          store.dispatch(
            setCredentials({
              accessToken: storedAuth.accessToken,
              refreshToken: storedAuth.refreshToken,
            }),
            updateUser(storedAuth.user),
          );
        }
      } finally {
        unsubscribeNetwork = initializeNetworkListener(store.dispatch);
      }
    };

    bootstrap();

    return () => {
      if (unsubscribeNetwork) {
        unsubscribeNetwork();
      }
    };
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <ToastHost />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
