import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeProvider } from "react-native-elements";

import HomeStack from "./components/navigations/HomeStack";
import ChatBoxStack from "./components/navigations/ChatBoxStack";
import PodcastStack from "./components/navigations/PodcastStack";
import ScheduleStack from "./components/navigations/ScheduleStack";
import ProfileStack from "./components/navigations/ProfileStack";

const Tab = createBottomTabNavigator<{
  HomeTab: undefined;
  ChatBoxTab: undefined;
  PodcastTab: undefined;
  ScheduleTab: undefined;
  ProfileTab: undefined;
}>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            activeTintColor: "black",
            inactiveTintColor: "lightgray",
          }}
          lazy
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size + 3} color={color} />
              ),
            }}
            name="HomeTab"
            component={HomeStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="forum" size={size + 3} color={color} />
              ),
            }}
            name="ChatBoxTab"
            component={ChatBoxStack}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons
                  name="date-range"
                  size={size + 3}
                  color={color}
                />
              ),
            }}
            name="ScheduleTab"
            component={ScheduleStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons
                  name="library-music"
                  size={size + 3}
                  color={color}
                />
              ),
            }}
            name="PodcastTab"
            component={PodcastStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="menu" size={size + 3} color={color} />
              ),
            }}
            name="ProfileTab"
            component={ProfileStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
