import { View } from "react-native";
import colorConstants from "../../constants/colorConstants";

const Circle: React.FC<{
  size?: number;
  color?: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}> = ({ size, color, top, left, right, bottom }) => {
  return (
    <View
      style={{
        width: size || 600,
        height: size || 600,
        borderRadius: (size || 600) / 2,
        backgroundColor: color || colorConstants.primary,
        position: "absolute",
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        zIndex: -1,
      }}
    />
  );
};

export default Circle;
