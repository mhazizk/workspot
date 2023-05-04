import { View, Text } from "react-native";
import React from "react";
import ReviewType from "../../types/reviewType";
import PrimaryText from "./PrimaryText";
import { Image } from "expo-image";
import colorConstants from "../../constants/colorConstants";
import MapRatingToStarFull from "./MapRatingToStarFull";

interface ReviewCardProps {
  onPress: () => void;
  userReview: ReviewType;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ onPress, userReview }) => {
  const { user, rating, review, date } = userReview;
  const { id: userId, imageURL, name } = user;
  return (
    <View
      style={{
        width: "100%",
        padding: 16,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: imageURL }}
          style={{ width: 48, height: 48, borderRadius: 48 / 2 }}
        />
        <View style={{ flex: 1, padding: 16 }}>
          <PrimaryText text={name} style={{ fontWeight: "bold" }} />
          <PrimaryText
            text={date}
            style={{ color: colorConstants.secondary }}
          />
        </View>
      </View>

      <MapRatingToStarFull rating={rating} size={16} />
      <PrimaryText text={review} style={{ paddingTop: 8 }} />
    </View>
  );
};

export default ReviewCard;
