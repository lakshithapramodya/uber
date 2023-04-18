import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { fontScale } from "nativewind";

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
        <TouchableOpacity className="flex-row ml-4 mt-4">
          <Icon
            className="w-10 h-10"
            style={{
              color: "black",
            }}
            name={icon}
            type="font-awesome"
            color="#b8adad"
          />
        </TouchableOpacity>
      )}
    />
  );
}
