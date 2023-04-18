import { View, Text, SafeAreaView } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";

import React from "react";

export default function HomeScreen() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text className="text-red-500 bg-white">HomeScreen</Text>
    </SafeAreaView>
  );
}
