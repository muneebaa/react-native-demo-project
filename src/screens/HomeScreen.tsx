import React from 'react';
import { Text, View } from 'react-native';
import tw from '../../lib/tailwind';

const HomeScreen: React.FC = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-primaryDark px-5`}>
      <Text style={tw`text-offWhite text-3xl font-bold`}>Home Screen</Text>
      <Text style={tw`text-muted text-sm mt-2`}>Main dashboard placeholder.</Text>
    </View>
  );
};

export default HomeScreen;
