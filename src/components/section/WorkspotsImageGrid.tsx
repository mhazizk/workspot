import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LocationCoverImage from "../basic/LocationCoverImage";
import WorkspotType from "../../types/workspotType";

interface ImageGridProps {
  workspots: WorkspotType[];
  onPress: (workspot: any) => void;
}

/**
 * ImageGrid
 *
 * This component is used to display a grid of images.
 *
 * @param workspots - The workspots to display in the grid.
 * @returns
 */
const WorkspotsImageGrid: React.FC<ImageGridProps> = ({
  workspots,
  onPress,
}) => {
  const horizontalSpacing = Dimensions.get("window").width / 4;
  const imageWidth = Dimensions.get("window").width / 3 - horizontalSpacing;

  return (
    <>
      <FlatList
        data={workspots}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
        numColumns={3}
        keyExtractor={({ id }) => id}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        style={{
          flex: 1,
        }}
        renderItem={({ item }) => {
          const { imageURL: imageURI, rating } = item;
          return (
            <>
              <TouchableOpacity onPress={(item) => onPress(item)}>
                <LocationCoverImage
                  imageURI={imageURI}
                  rating={rating}
                  style={{
                    width: imageWidth,
                    height: imageWidth,
                  }}
                />
              </TouchableOpacity>
            </>
          );
        }}
      />
    </>
  );
};

export default WorkspotsImageGrid;
