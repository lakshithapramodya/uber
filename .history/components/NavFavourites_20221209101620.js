import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function NavFavaourites() {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Medirigiriya, Sri Lanka",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "Moratuwa, Sri Lanka",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { icon, destination, location } }) => (
        <TouchableOpacity className="flex-row ml-4 mt-8">
          <View className="bg-gray-300 p-2 rounded-full">
            <Icon name={icon} type="font-awesome" color="#b8adad" />
          </View>
          <View className="ml-4">
            <Text className="font-semibold">{location}</Text>
            <Text className="font-semibold">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
