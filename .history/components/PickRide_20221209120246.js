import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function PickRide() {
  return (
    <View className="flex">
      <Pressable className="absolute top-3 left-5">
        <Icon name="left" type="antdesign" color="black" size={20} />
      </Pressable>
      <Text className="text-center text-xl font-semibold mt-2">
        Select Ride
      </Text>
    </View>
  );
}
