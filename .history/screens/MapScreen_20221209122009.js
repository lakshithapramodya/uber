import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import NavigationCard from "../components/NavigationCard";
import PickRide from "../components/PickRide";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View className="">
      <View className="h-1/2">
        <Map />
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
