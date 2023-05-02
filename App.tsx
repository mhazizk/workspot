import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./src/navigation/TabNavigation";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer theme={DarkTheme}>
        <TabNavigation />
      </NavigationContainer>
    </>
  );
}
