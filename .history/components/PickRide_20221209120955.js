import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function PickRide() {
  const navigation = useNavigation();

  return (
    <View className="flex">
      <TouchableOpacity className="absolute top-5 left-3">
        <Icon
          onPress={() => navigation.navigate("NavigationCard")}
          name="left"
          type="antdesign"
          color="black"
          size={20}
        />
      </TouchableOpacity>
      <Text className="text-center text-xl font-semibold mt-3">
        Select Ride
      </Text>
    </View>
  );
}
