import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen, EditProfileScreen } from '../screens';
import type { SettingsStackParamList } from './types';
import {
  SCREEN_NAME_SETTINGS_MAIN,
  SCREEN_NAME_EDIT_PROFILE,
} from '../utils/screenName';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_NAME_SETTINGS_MAIN} component={SettingsScreen} />
      <Stack.Screen
        name={SCREEN_NAME_EDIT_PROFILE}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
