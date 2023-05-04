import { View, Text } from "react-native";
import React from "react";
import UserProfileType from "../../types/userProfileType";
import { Image } from "expo-image";
import IonIcons from "react-native-vector-icons/Ionicons";
import colorConstants from "../../constants/colorConstants";
import Circle from "./Circle";

interface ProfileCardProps {
  onPress: () => void;
  userProfile: UserProfileType;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ onPress, userProfile }) => {
  const { name, occupation, workType, location, bio, imageURL } = userProfile;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: colorConstants.cardBackground,
        borderRadius: 8,
        padding: 16,
        overflow: "hidden",
      }}
    >
      <Circle size={250} top={-150} right={-100} />
      <Image
        source={{ uri: imageURL }}
        style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
      />
      <View
        style={{
          flexDirection: "column",
          paddingLeft: 16,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {occupation}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            paddingTop: 4,
          }}
        >
          <IonIcons name="business" size={16} color="white" />
          <Text style={{ color: "white", paddingLeft: 4 }}>{workType}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            paddingTop: 4,
          }}
        >
          <IonIcons name="location" size={16} color="white" />
          <Text style={{ color: "white", paddingLeft: 4 }}>{location}</Text>
        </View>
        <Text
          style={{
            paddingTop: 4,
            color: "white",
          }}
        >{`" ${bio} "`}</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
