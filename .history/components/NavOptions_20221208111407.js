import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

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

  const navigation = useNavigation();

  return (
    <FlatList
      className=""
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className={`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 $(!Origin && opacity-50)`}
        >
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
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <View className="bg-black w-8 h-8 justify-center rounded-full mt-2">
              <Icon type="antdesign" name="arrowright" color="white" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
