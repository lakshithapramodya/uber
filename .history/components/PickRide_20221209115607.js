import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function PickRide() {
  return (
    <View>
      <TouchableOpacity>
        <Icon name="left" type="antdesign" color="black" />
      </TouchableOpacity>
      <Text className="text-center text-xl font-semibold">Select Ride</Text>
    </View>
  );
}
