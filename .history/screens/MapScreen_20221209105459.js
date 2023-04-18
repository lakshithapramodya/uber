import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import NavFavourites from "../components/NavFavourites";
import PickRide from "../components/PickRide";

import NavigationCard from "../components/NavigationCard";

export default function MapScreen() {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <NavigationCard />
      </View>
    </View>
  );
}
