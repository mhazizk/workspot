import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import WorkspotDetailsScreen from "../screens/WorkspotDetailsScreen";
import RootStackParamList from "../types/rootStackParamList";

const Stack = createStackNavigator<RootStackParamList>();
const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WorkspotDetails"
          component={WorkspotDetailsScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
