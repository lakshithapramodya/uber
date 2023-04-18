import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { ChevronLeftIcon } from "react-native-heroicons/outline";

export default function PickRide() {
  const navigation = useNavigation();

  return (
    <View className="flex">
      <TouchableOpacity className="-ml-80 mt-5">
        <Icon
          onPress={() => navigation.navigate("NavigationCard")}
          name="left"
          type="antdesign"
          color="black"
          size={20}
        />
      </TouchableOpacity>
      <Text className="text-center text-xl font-semibold -mt-6">
        Select Ride
      </Text>
    </View>
  );
}
