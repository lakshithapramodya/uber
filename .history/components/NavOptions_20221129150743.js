import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function NavOptions() {
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];

  return (
    <FlatList
      className=""
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity className="p-2 pl-6 pb-8 pt-4">
          <View className="">
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
            />
            <Text className="mt-2">{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
