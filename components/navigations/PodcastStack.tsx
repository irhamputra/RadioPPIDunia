import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PodcastScreen from "../../screens/PodcastScreen";

const Stack = createStackNavigator<{ Podcast: undefined }>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Podcast">
      <Stack.Screen name="Podcast" component={PodcastScreen} />
    </Stack.Navigator>
  );
};
