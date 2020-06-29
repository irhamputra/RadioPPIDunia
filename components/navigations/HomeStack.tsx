import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import React from "react";

const Stack = createStackNavigator<{ Home: undefined }>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          title: "Radio PPI Dunia",
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
