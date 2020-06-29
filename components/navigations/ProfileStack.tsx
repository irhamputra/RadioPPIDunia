import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createStackNavigator<{ Settings: undefined }>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
