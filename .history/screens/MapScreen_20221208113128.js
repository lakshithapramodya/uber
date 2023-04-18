import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function MapScreen() {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Text className="text-lg items-center mx-auto">Hi Lakshitha</Text>
        <GooglePlacesAutocomplete />
      </View>
    </View>
  );
}
