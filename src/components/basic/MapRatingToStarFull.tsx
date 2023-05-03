import { View, Text } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";

interface MapRatingToStarProps {
  rating: number;
}

const MapRatingToStarFull: React.FC<MapRatingToStarProps> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<IonIcons name="star" size={24} color="gold" />);
    } else {
      stars.push(<IonIcons name="star-outline" size={24} color="gold" />);
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {stars.map((star) => {
        return star;
      })}
    </View>
  );
};

export default MapRatingToStarFull;
