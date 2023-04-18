import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Map from "../components/Map";
import NavigationCard from "../components/NavigationCard";
import PickRide from "../components/PickRide";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View className="">
      <View className="h-1/2">
        <Map />
        <TouchableOpacity className="absolute top-10 left-10 bg-white p-2 rounded-full">
          <Icon name="menu" />
        </TouchableOpacity>
      </View>
      <View className="h-1/2 bg-white">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            component={NavigationCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PickRide"
            component={PickRide}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
