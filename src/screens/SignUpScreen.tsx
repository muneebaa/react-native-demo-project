import React from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../navigation/types';
import tw from '../../lib/tailwind';
import CommonButton from '../components/CommonButton';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-primaryDark px-5`}>
      <Text style={tw`text-offWhite text-3xl font-bold`}>Sign Up Screen</Text>
      <Text style={tw`text-muted text-sm mt-2 mb-6`}>
        Create account flow placeholder.
      </Text>
      <CommonButton
        label="Back To Login"
        color="primary"
        style={tw`w-48`}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SignUpScreen;
