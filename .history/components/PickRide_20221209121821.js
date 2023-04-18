import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function PickRide() {
  const navigation = useNavigation();

  return (
    <View className="flex">
      <Text className="text-center text-xl font-semibold">Select Ride</Text>
    </View>
  );
}
