import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function PickRide() {
  const navigation = useNavigation();

  return (
    <View className="flex">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-3 left-5"
      >
        <Icon name="left" type="antdesign" color="black" size={20} />
      </TouchableOpacity>
      <Text className="text-center text-xl font-semibold mt-2">
        Select Ride
      </Text>
    </View>
  );
}