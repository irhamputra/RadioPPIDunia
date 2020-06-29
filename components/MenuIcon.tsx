import * as React from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-elements";

const MenuIcon: React.FC<{
  name: string;
  navigation: () => void;
  text: string;
}> = ({ name, navigation, text }) => {
  return (
    <View>
      <Avatar
        rounded
        icon={{ name, color: "black" }}
        size={60}
        onPress={navigation}
      />
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </View>
  );
};

export default MenuIcon;
