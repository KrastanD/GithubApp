import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import ProfileScreen from "../screens/ProfileScreen";
import ReposScreen from "../screens/ReposScreen";
import FollowersScreen from "../screens/FollowersScreen";
import FollowingScreen from "../screens/FollowingScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Profile";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ username: "KrastanD" }}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Repos"
        component={ReposScreen}
        options={{
          title: "Repositories",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Followers"
        component={FollowersScreen}
        options={{
          title: "Followers",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-contacts" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Following"
        component={FollowingScreen}
        options={{
          title: "Following",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-contact" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Profile":
      return "Profile";
    case "Repos":
      return "Repositories";
    case "Followers":
      return "Followers";
    case "Following":
      return "Following";
  }
}
