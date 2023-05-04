import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./src/navigation/TabNavigation";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import "react-native-gesture-handler";
import StackNavigation from "./src/navigation/StackNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer theme={DarkTheme}>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}
