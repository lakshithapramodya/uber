import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-500 mx-auto my-auto">HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}
