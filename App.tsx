import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

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
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        lazy
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
          name="HomeTab"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "ChatBox",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="forum" size={size} color={color} />
            ),
          }}
          name="ChatBoxTab"
          component={ChatBoxStack}
        />

        <Tab.Screen
          options={{
            tabBarLabel: "Jadwal",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="date-range" size={size} color={color} />
            ),
          }}
          name="ScheduleTab"
          component={ScheduleStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Podcast",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="library-music" size={size} color={color} />
            ),
          }}
          name="PodcastTab"
          component={PodcastStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="face" size={size} color={color} />
            ),
          }}
          name="ProfileTab"
          component={ProfileStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
