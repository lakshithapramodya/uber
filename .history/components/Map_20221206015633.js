import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

export default function Map() {
  const origin = useSelector(selectOrigin);

  return (
    <View className="flex-1">
      <MapView
        className="flex-1"
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
    </View>
  );
}
