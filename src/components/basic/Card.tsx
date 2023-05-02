import { View, Text } from "react-native";
import React from "react";

interface CardProps {
  onPress: () => void;
}

const Card: React.FC<CardProps> = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

export default Card;
