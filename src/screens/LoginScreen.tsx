import React from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../navigation/types';
import { SCREEN_NAME_SIGNUP } from '../utils/screenName';
import tw from '../../lib/tailwind';
import CommonButton from '../components/CommonButton';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-primaryDark px-5`}>
      <Text style={tw`text-offWhite text-3xl font-bold`}>Login Screen</Text>
      <Text style={tw`text-muted text-sm mt-2 mb-6`}>
        This is a real screen component.
      </Text>
      <CommonButton
        label="Go To Sign Up"
        color="secondary"
        style={tw`w-48`}
        onPress={() => navigation.navigate(SCREEN_NAME_SIGNUP)}
      />
    </View>
  );
};

export default LoginScreen;
