import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function PickRide() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

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
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row text-center items-center mx-4 justify-between px-5 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              className=""
              source={{
                uri: image,
              }}
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
            />
            <View className="flex">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text className="text-sm">Travel Time...</Text>
            </View>
            <Text className="text-xl font-semibold">$99</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity className="bg-black py-3 mb-2 mx-4">
          <Text disabled={!selected} className="text-white text-center text-xl">
            Choose {selected.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
