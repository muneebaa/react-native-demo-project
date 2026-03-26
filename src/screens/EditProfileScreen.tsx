import React from 'react';
import { Pressable, Text, View } from 'react-native';
import tw from '../../lib/tailwind';

const EditProfileScreen: React.FC = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-primaryDark px-5`}>
      <Text style={tw`text-offWhite text-3xl font-bold`}>Edit Profile Screen</Text>
      <Text style={tw`text-muted text-sm mt-2 mb-5`}>Profile form placeholder.</Text>
      <Pressable style={tw`bg-tertiary py-3 px-5 rounded-lg`}>
        <Text style={tw`text-offWhite font-semibold`}>Save Changes</Text>
      </Pressable>
    </View>
  );
};

export default EditProfileScreen;
