import { View, Text, FlatList } from "react-native";
import React from "react";
import LocationCoverImage from "../basic/LocationCoverImage";
import WorkspotType from "../../types/workspotType";

interface ImageGridProps {
  workspots: WorkspotType[];
}

/**
 * ImageGrid
 *
 * This component is used to display a grid of images.
 *
 * @param workspots - The workspots to display in the grid.
 * @returns
 */
const WorkspotsImageGrid: React.FC<ImageGridProps> = ({ workspots }) => {
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
        }}
        style={{
          flex: 1,
        }}
        renderItem={({ item: { imageURI, rating } }) => (
          <>
            <LocationCoverImage imageURI={imageURI} rating={rating} />
          </>
        )}
      />
    </>
  );
};

export default WorkspotsImageGrid;
