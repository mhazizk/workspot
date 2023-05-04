import { View, Text } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";

interface MapRatingToStarProps {
  rating: number;
}

const MapRatingToStarSimple: React.FC<MapRatingToStarProps> = ({ rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderTopRightRadius: 8,
      }}
    >
      <IonIcons name="star" size={16} color="yellow" />
      <Text
        style={{
          paddingLeft: 4,
          color: "white",
          fontSize: 14,
        }}
      >
        {rating}
      </Text>
    </View>
  );
};

export default MapRatingToStarSimple;
