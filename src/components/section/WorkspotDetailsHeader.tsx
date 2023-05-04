import { View, Text } from "react-native";
import React from "react";
import WorkspotDetailsType from "../../types/workspotDetailsType";
import PrimaryText from "../basic/PrimaryText";
import IonIcons from "react-native-vector-icons/Ionicons";
import MapRatingToStarFull from "../basic/MapRatingToStarFull";
import { Image } from "expo-image";
import Circle from "../basic/Circle";

interface WorkspotDetailsHeaderProps {
  workspot: WorkspotDetailsType;
}

const WorkspotDetailsHeader: React.FC<WorkspotDetailsHeaderProps> = ({
  workspot,
}) => {
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
    <View
      style={{
        height: 300,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: imageURL }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 10,
        }}
      >
        <Circle size={250} bottom={-150} left={-100} />

        <View
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
          }}
        >
          <PrimaryText
            text={name}
            style={{ fontSize: 24, fontWeight: "bold" }}
          />
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <MapRatingToStarFull rating={rating} />
            <PrimaryText text={price.toString()} style={{ paddingLeft: 4 }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <IonIcons name="location" size={16} color="white" />
            <PrimaryText
              text={location}
              style={{ paddingLeft: 4, paddingTop: 4 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WorkspotDetailsHeader;
