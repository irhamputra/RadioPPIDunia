import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createStackNavigator<{ Menu: undefined }>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
