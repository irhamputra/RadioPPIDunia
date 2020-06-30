import * as React from "react";
import { View } from "react-native";
import MenuIcon from "./MenuIcon";
import { Text, Divider } from "react-native-elements";

const BoxMenuIcon: React.FC = () => {
  const navigate = () => {
    alert("Navigate this");
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingBottom: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ padding: 10, fontWeight: "bold" }}>Menu</Text>
      <Divider />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <MenuIcon name="radio" navigation={navigate} text="Live!" />
        <MenuIcon name="queue-music" navigation={navigate} text="Request" />
        <MenuIcon name="group" navigation={navigate} text="SS & SK" />
        <MenuIcon name="insert-chart" navigation={navigate} text="Chart" />
      </View>
    </View>
  );
};

export default BoxMenuIcon;
