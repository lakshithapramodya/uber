import { View, Text, FlatList } from "react-native";
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

  return <FlatList data={data} horizontal renderItem={({item}) => (
    
  )} />;
}
