import { View, Text } from "react-native";
import React from "react";

export default function MapScreen() {
  return (
    <View>
      <Text>MapScreen</Text>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2"></View>
    </View>
  );
}
