import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="mx-auto my-auto">
        <Text>Lets Build UBER</Text>
      </View>
    </Provider>
  );
}
