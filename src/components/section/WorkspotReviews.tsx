import { View, Text, FlatList } from "react-native";
import React from "react";
import ReviewType from "../../types/reviewType";
import PrimaryText from "../basic/PrimaryText";
import ReviewCard from "../basic/ReviewCard";

interface WorkspotReviewsProps {
  reviews: ReviewType[];
}

const WorkspotReviews: React.FC<WorkspotReviewsProps> = ({ reviews }) => {
  return (
    <>
      <FlatList
        data={reviews}
        keyExtractor={({ id }) => id}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 16,
          width: "100%",
          alignItems: "center",
        }}
        renderItem={({ item }) => {
          return (
            <>
              <ReviewCard userReview={item} onPress={() => {}} />
            </>
          );
        }}
      />
    </>
  );
};

export default WorkspotReviews;
