import React from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SettingsStackParamList } from '../navigation/types';
import { SCREEN_NAME_EDIT_PROFILE } from '../utils/screenName';
import tw from '../../lib/tailwind';
import CommonButton from '../components/CommonButton';

type Props = NativeStackScreenProps<SettingsStackParamList, 'SettingsMain'>;

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-primaryDark px-5`}>
      <Text style={tw`text-offWhite text-3xl font-bold`}>Settings Screen</Text>
      <Text style={tw`text-muted text-sm mt-2 mb-5`}>
        Manage account preferences.
      </Text>
      <CommonButton
        label="Edit Profile"
        color="primary"
        style={tw`mt-2 w-48`}
        onPress={() => navigation.navigate(SCREEN_NAME_EDIT_PROFILE)}
      />
    </View>
  );
};

export default SettingsScreen;
