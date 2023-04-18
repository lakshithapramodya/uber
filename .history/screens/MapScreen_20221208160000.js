import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

export default function MapScreen() {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Text className="text-lg items-center mx-auto">Hi Lakshitha</Text>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
              margin: 50,
            },
            textInput: {
              fontSize: 18,
              backgroundColor: "#0a95ff",
            },
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
          }}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
    </View>
  );
}
