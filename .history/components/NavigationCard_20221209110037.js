import { View, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from "../slices/navSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavourites from "../components/NavFavourites";
import { useNavigation } from "@react-navigation/native";

export default function NavigationCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View>
      <Text className="text-lg items-center mx-auto my-4">Hi Lakshitha</Text>
      <GooglePlacesAutocomplete
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
          navigation.navigate("PickRide");
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
      <NavFavourites />
    </View>
  );
}
