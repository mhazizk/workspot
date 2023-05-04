import {
  View,
  Text,
  ViewProps,
  StyleProp,
  ViewStyle,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import WorkspotDetailsType from "../../types/workspotDetailsType";
import MaterialDesignIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PrimaryText from "../basic/PrimaryText";
import colorConstants from "../../constants/colorConstants";

interface WorkspotInfoProps {
  workspot: WorkspotDetailsType;
}

const PillTag: React.FC<{
  text: string;
  iconName: string;
  style?: ViewStyle;
}> = ({ text, iconName, style }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: colorConstants.primary,
        borderRadius: 8,
        padding: 4,
        ...style,
      }}
    >
      <MaterialDesignIcons name={iconName} size={24} color="white" />
      <PrimaryText text={text} style={{ paddingHorizontal: 4 }} />
    </View>
  );
};

const BorderlessPrimaryPillButton: React.FC<{
  text: string;
  iconName: string;
  style?: ViewStyle;
  onPress: () => void;
}> = ({ text, iconName, style, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        padding: 4,
        ...style,
      }}
    >
      <PrimaryText text={text} style={{ color: colorConstants.primary }} />
      <MaterialDesignIcons
        name={iconName}
        size={24}
        color={colorConstants.primary}
      />
    </TouchableOpacity>
  );
};

const TopAmenities: React.FC<{
  workspot: WorkspotDetailsType;
}> = ({ workspot }) => {
  const {
    tablesAndChairs,
    indoorOutdoor,
    electricals,
    rooms,
    entertainment,
    foodAndDrinks,
    extras,
  } = workspot;
  const { totalTables, chairsPerTable, chairHeight } = tablesAndChairs;
  const { indoorSeating, outdoorSeating } = indoorOutdoor;
  const { powerOutlets, wifi } = electricals;
  const { restroom, prayerRoom, smokingRoom, airConditionedRoom } = rooms;
  const { tv, music, games } = entertainment;
  const { foods, drinks, alcohol, coffee } = foodAndDrinks;
  const { parking, smokingAllowed, petsAllowed, wheelchairAccessible } = extras;

  return (
    <>
      <View
        style={{
          alignItems: "flex-start",
          width: "100%",
          paddingVertical: 16,
        }}
      >
        <PrimaryText
          text="Top Amenities"
          style={{ paddingBottom: 8, fontWeight: "bold" }}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {chairHeight && (
              <PillTag text={chairHeight} iconName="table-chair" />
            )}
            {indoorSeating && outdoorSeating && (
              <PillTag
                text="Indoor & Outdoor"
                iconName="pine-tree"
                style={{ marginLeft: 8 }}
              />
            )}
            {wifi && (
              <PillTag text="Wifi" iconName="wifi" style={{ marginLeft: 8 }} />
            )}
            {powerOutlets && (
              <PillTag
                text="Power"
                iconName="power-plug"
                style={{ marginLeft: 8 }}
              />
            )}
          </View>
          <BorderlessPrimaryPillButton
            text="See All"
            iconName="chevron-right"
            style={{ paddingLeft: 16 }}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
    </>
  );
};

const WorkspotInfo: React.FC<WorkspotInfoProps> = ({ workspot }) => {
  const {
    tablesAndChairs,
    indoorOutdoor,
    electricals,
    rooms,
    entertainment,
    foodAndDrinks,
    extras,
  } = workspot;

  const { indoorSeating, outdoorSeating } = indoorOutdoor;
  const { powerOutlets, wifi } = electricals;
  const { restroom, prayerRoom, smokingRoom, airConditionedRoom } = rooms;
  const { tv, music, games } = entertainment;
  const { foods, drinks, alcohol, coffee } = foodAndDrinks;
  const { parking, smokingAllowed, petsAllowed, wheelchairAccessible } = extras;

  return (
    <View>
      <TopAmenities workspot={workspot} />
      {/* // TAG : Indoor & Outdoor */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialDesignIcons name="pine-tree" size={24} color="white" />
        <PrimaryText text="Indoor & Outdoor" style={{ paddingLeft: 4 }} />
      </View>
      {/* // TAG : Rooms */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialDesignIcons name="door-open" size={24} color="white" />
        <PrimaryText text="Rooms" style={{ paddingLeft: 4 }} />
      </View>
      {/* // TAG : Food & Drinks */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialDesignIcons name="food" size={24} color="white" />
        <PrimaryText text="Food & Drinks" style={{ paddingLeft: 4 }} />
      </View>
      {/* // TAG : Entertainment */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialDesignIcons name="music" size={24} color="white" />
        <PrimaryText text="Entertainment" style={{ paddingLeft: 4 }} />
      </View>
      {/* // TAG : Extras */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialDesignIcons name="plus" size={24} color="white" />
        <PrimaryText text="Extras" style={{ paddingLeft: 4 }} />
      </View>
    </View>
  );
};

export default WorkspotInfo;
