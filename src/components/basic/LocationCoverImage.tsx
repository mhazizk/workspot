import { TouchableOpacity, View, ViewProps } from "react-native";
import React from "react";
import { Image } from "expo-image";
import MapRatingToStarSimple from "./MapRatingToStarSimple";

interface LocationCoverImageProps {
  imageURI: string;
  rating: number;
  style?: ViewProps["style"];
}

const LocationCoverImage: React.FC<LocationCoverImageProps> = ({
  imageURI,
  rating,
  ...style
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
        ...style,
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 10,
          borderTopRightRadius,
          borderBottomLeftRadius: 8,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          ...style,
        }}
      >
        <MapRatingToStarSimple rating={rating} />
      </View>
      <Image
        source={{ uri: imageURI }}
        style={{
          width,
          height,
          borderRadius,
          ...style,
        }}
      />
    </View>
  );
};

export default LocationCoverImage;
