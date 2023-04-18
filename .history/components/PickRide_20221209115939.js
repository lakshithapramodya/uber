import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function PickRide() {
  return (
    <View className="flex">
      <TouchableOpacity className="flex top-3 left-5">
        <Icon name="left" type="antdesign" color="black" size={20} />
      </TouchableOpacity>
      <Text className="text-center text-xl font-semibold">Select Ride</Text>
    </View>
  );
}
