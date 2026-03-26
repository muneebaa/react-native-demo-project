import React from 'react';
import { View } from 'react-native';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const RootNavigator: React.FC = () => {
  // TODO: replace this with auth state when store is wired.
  const isAuthenticated = true;

  return (
    <View style={{ flex: 1 }}>
      {!isAuthenticated ? <AuthNavigator /> : <BottomTabNavigator />}
    </View>
  );
};

export default RootNavigator;
