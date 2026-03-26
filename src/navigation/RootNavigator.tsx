import React from 'react';
import { View } from 'react-native';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import OfflineBanner from '../components/OfflineBanner';

const RootNavigator: React.FC = () => {
  // TODO: replace this with auth state when store is wired.
  const isAuthenticated = true;

  return (
    <View style={{ flex: 1 }}>
      <OfflineBanner />
      {!isAuthenticated ? <AuthNavigator /> : <BottomTabNavigator />}
    </View>
  );
};

export default RootNavigator;
