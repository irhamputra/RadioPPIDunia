import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "../../screens/ScheduleScreen";
import React from "react";

const Stack = createStackNavigator<{ Schedule: undefined }>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Schedule">
      <Stack.Screen
        name="Schedule"
        options={{ title: "Jadwal" }}
        component={ScheduleScreen}
      />
    </Stack.Navigator>
  );
};
