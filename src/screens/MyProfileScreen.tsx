import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import WorkspotType from "../types/workspotType";
import WorkspotsImageGrid from "../components/section/WorkspotsImageGrid";
import { Image } from "expo-image";
import LocationCoverImage from "../components/basic/LocationCoverImage";
import UserProfileType from "../types/userProfileType";
import ProfileCard from "../components/basic/ProfileCard";
import RootStackParamList from "../types/rootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import {
  dummyData,
  dummyUser,
  dummyWorkspotDetails,
} from "../constants/dummyData";

type MyProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

type MyProfileScreenScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

interface MyProfileScreenProps {
  navigation: MyProfileScreenNavigationProp;
  route: MyProfileScreenScreenRouteProp;
}

const MyProfileScreen: React.FC<MyProfileScreenProps> = ({
  navigation,
  route,
}) => {
  const [workspots, setWorkspots] = useState<WorkspotType[]>(() => dummyData());

  return (
    <>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{
          padding: 16,
        }}
      >
        <ProfileCard userProfile={dummyUser} onPress={() => {}} />
        <WorkspotsImageGrid
          workspots={dummyData()}
          onPress={(workspot) => {
            navigation.navigate("WorkspotDetails", {
              workspot: dummyWorkspotDetails,
            });
          }}
        />
      </ScrollView>
    </>
  );
};

export default MyProfileScreen;
