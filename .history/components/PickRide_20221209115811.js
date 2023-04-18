import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function PickRide() {
  return (
    <View>
      <TouchableOpacity className="flex items-center justify-center">
        <View className="absolute top-3 left-5">
          <Icon name="left" type="antdesign" color="black" size={20} />
        </View>
      </TouchableOpacity>
      <Text className="text-center text-xl font-semibold mt-3">
        Select Ride
      </Text>
    </View>
  );
}
