import { View, Text } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";
import colorConstants from "../../constants/colorConstants";

interface MapRatingToStarProps {
  rating: number;
  size?: number;
}

const MapRatingToStarFull: React.FC<MapRatingToStarProps> = ({
  rating,
  size,
}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<IonIcons name="star" size={size || 24} color="gold" />);
    } else {
      stars.push(
        <IonIcons
          name="star"
          size={size || 24}
          color={colorConstants.secondary}
        />
      );
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
