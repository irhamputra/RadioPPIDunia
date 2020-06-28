import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChatBoxScreen from "../../screens/ChatBoxScreen";

const Stack = createStackNavigator<{ ChatBox: undefined }>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="ChatBox">
      <Stack.Screen name="ChatBox" component={ChatBoxScreen} />
    </Stack.Navigator>
  );
};
