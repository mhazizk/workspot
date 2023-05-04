import { View, Text, ScrollView } from "react-native";
import React from "react";
import WorkspotDetailsType from "../types/workspotDetailsType";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import RootStackParamList from "../types/rootStackParamList";
import WorkspotDetailsHeader from "../components/section/WorkspotDetailsHeader";
import WorkspotReviews from "../components/section/WorkspotReviews";
import ReviewType from "../types/reviewType";
import { dummyReviews } from "../constants/dummyData";
import WorkspotInfo from "../components/section/WorkspotInfo";

type WorkspotDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "WorkspotDetails"
>;

type WorkspotDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "WorkspotDetails"
>;

interface WorkspotDetailsScreenProps {
  navigation: WorkspotDetailsScreenNavigationProp;
  route: WorkspotDetailsScreenRouteProp;
}

const WorkspotDetailsScreen: React.FC<WorkspotDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { workspot } = route.params;
  const {
    name,
    location,
    imageURL,
    rating,
    price,
    description,
    isFavorite,
    isFeatured,
    isPopular,
    isRecommended,
  } = workspot;

  return (
    <ScrollView>
      <WorkspotDetailsHeader workspot={workspot} />
      <WorkspotInfo workspot={workspot} />
      {/* <WorkspotReviews reviews={dummyReviews()} /> */}
    </ScrollView>
  );
};

export default WorkspotDetailsScreen;
