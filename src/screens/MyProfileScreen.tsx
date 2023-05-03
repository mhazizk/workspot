import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import WorkspotType from "../types/workspotType";
import WorkspotsImageGrid from "../components/section/ImageGrid";
import { Image } from "expo-image";
import LocationCoverImage from "../components/basic/LocationCoverImage";

const dummyData = (): WorkspotType[] => {
  const data: WorkspotType[] = [];
  let counter = 0;
  while (counter < 10) {
    data.push({
      id: String(counter),
      name: `Workspot ${counter}`,
      description: `Description ${counter}`,
      location: `Location ${counter}`,
      imageURI: `https://picsum.photos/200/300?random=${counter}`,
      rating: Math.random() * 5,
      price: Math.random() * 100,
    });
    counter++;
  }
  return data;
};

const MyProfileScreen = () => {
  const [workspots, setWorkspots] = useState<WorkspotType[]>(() => dummyData());

  return (
    <View>
      <LocationCoverImage
        imageURI="https://picsum.photos/200/300?random=1"
        rating={4}
      />
      <WorkspotsImageGrid workspots={workspots} />
    </View>
  );
};

export default MyProfileScreen;
