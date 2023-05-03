import { View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import MapRatingToStarSimple from "./MapRatingToStarSimple";

interface LocationCoverImageProps {
  imageURI: string;
  rating: number;
}

const LocationCoverImage: React.FC<LocationCoverImageProps> = ({
  imageURI,
  rating,
}) => {
  const width = 100;
  const height = 100;
  const borderTopRightRadius = 8;
  const borderRadius = 8;

  return (
    <View
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 10,
          borderTopRightRadius,
        }}
      >
        <MapRatingToStarSimple rating={rating} />
      </View>
      <Image
        source={{ uri: imageURI }}
        style={{
          width,
          height,
        }}
      />
    </View>
  );
};

export default LocationCoverImage;
