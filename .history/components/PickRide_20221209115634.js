import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function PickRide() {
  return (
    <View>
      <TouchableOpacity className="flex">
        <Icon name="left" type="antdesign" color="black" size={16} />
      </TouchableOpacity>
      <Text className="text-center text-xl font-semibold">Select Ride</Text>
    </View>
  );
}
