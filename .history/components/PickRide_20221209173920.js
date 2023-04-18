import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function PickRide() {
  const navigation = useNavigation();
  const [select, setSelect] = useState(null);

  const data = [
    {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];
  return (
    <View className="flex bg-white h-full">
      <Text className="text-center text-xl font-semibold mt-2">
        Select Ride
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelect(item)}
            className={`flex-row text-center items-center ml-8 justify-between px-5 ${
              id === select?.id && "bg-gray-400"
            }`}
          >
            <Image
              className=""
              source={{
                uri: image,
              }}
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
            />
            <View className="flex">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text className="text-sm">Travel Time...</Text>
            </View>
            <Text className="text-xl font-semibold">$Price</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
