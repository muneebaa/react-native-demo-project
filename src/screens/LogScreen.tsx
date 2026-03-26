import React from 'react';
import { Text, View } from 'react-native';
import tw from '../../lib/tailwind';

const LogScreen: React.FC = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-primaryDark px-5`}>
      <Text style={tw`text-offWhite text-3xl font-bold`}>Log Screen</Text>
      <Text style={tw`text-muted text-sm mt-2`}>Track your activities here.</Text>
    </View>
  );
};

export default LogScreen;
