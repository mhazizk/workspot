import { View, Text, TextProps, TextStyle } from "react-native";
import React from "react";

interface PrimaryTextProps {
  text: string;
  style?: TextStyle;
}

const PrimaryText: React.FC<PrimaryTextProps> = ({ text, style }) => {
  return (
    <>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          ...style,
        }}
      >
        {text}
      </Text>
    </>
  );
};

export default PrimaryText;
