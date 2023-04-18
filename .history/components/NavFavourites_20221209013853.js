import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

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
      renderItem={(item) => (
        <TouchableOpacity>
          <Icon name="home" type="antdesign" color="#b8adad" />
        </TouchableOpacity>
      )}
    />
  );
}
