import { View, Text, SafeAreaView, Image } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";

import React from "react";

export default function HomeScreen() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View>
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          className="w-32 h-32 object-contain"
        />
      </View>
    </SafeAreaView>
  );
}
