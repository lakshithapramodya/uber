import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";

import NavFavourites from "../components/NavFavourites";

import PickRide from "../components/PickRide";
import { useNavigation } from "@react-navigation/native";
import NavigationCard from "../components/NavigationCard";

export default function MapScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <NavigationCard />
        <Stack.Navigator>
          <Stack.Screen
            name="NavFavourite"
            component={NavFavourites}
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
