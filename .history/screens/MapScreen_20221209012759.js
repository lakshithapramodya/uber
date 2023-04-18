import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { Icon } from "@rneui/themed";

export default function MapScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Text className="text-lg items-center mx-auto my-4">Hi Lakshitha</Text>
        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              backgroundColor: "#b8adad",
              color: "white",
              marginHorizontal: 10,
            },
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
          }}
          placeholder="Where To?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <Icon name="home" type="antdesign" color="#517fa4" />
      </View>
    </View>
  );
}
