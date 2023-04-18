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
          //   style={{
          //     width: 100,
          //     height: 100,
          //     resizeMode: "contain",
          //   }}
          className="w-32 h-16 object-contain"
        />
      </View>
    </SafeAreaView>
  );
}
