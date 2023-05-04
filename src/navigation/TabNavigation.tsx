import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import screenNameConstants from "../constants/screenNameConstants";
import DashboardScreen from "../screens/DashboardScreen";
import ExploreScreen from "../screens/ExploreScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import IonIcons from "react-native-vector-icons/Ionicons";
import colorConstants from "../constants/colorConstants";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../types/rootStackParamList";
import { RouteProp } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

type BottomTabScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "BottomTab"
>;

type BottomTabScreenRouteProp = RouteProp<RootStackParamList, "BottomTab">;

interface BottomTabScreenProps {
  navigation: BottomTabScreenNavigationProp;
  route: BottomTabScreenRouteProp;
}

const TabNavigation: React.FC<BottomTabScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={screenNameConstants.dashboardScreen.id}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case screenNameConstants.dashboardScreen.id:
                iconName = focused ? "grid" : "grid-outline";
                break;
              case screenNameConstants.exploreScreen.id:
                iconName = focused ? "search" : "search-outline";
                break;
              case screenNameConstants.profileScreen.id:
                iconName = focused ? "person" : "person-outline";
                break;
              default:
                iconName = focused ? "grid" : "grid-outline";
                break;
            }
            return <IonIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colorConstants.primary,
        })}
      >
        <Tab.Screen
          options={{
            title: screenNameConstants.dashboardScreen.title,
          }}
          name={screenNameConstants.dashboardScreen.id}
          component={DashboardScreen}
        />
        <Tab.Screen
          options={{
            title: screenNameConstants.exploreScreen.title,
          }}
          name={screenNameConstants.exploreScreen.id}
          component={ExploreScreen}
        />
        <Tab.Screen
          options={{
            title: screenNameConstants.profileScreen.title,
          }}
          name={screenNameConstants.profileScreen.id}
          component={MyProfileScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
