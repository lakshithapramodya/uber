import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={stor}>
      <View className="mx-auto my-auto">
        <Text>Lets Build UBER</Text>
      </View>
    </Provider>
  );
}
