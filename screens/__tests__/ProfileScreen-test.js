import React from "react";
import ProfileScreen from "../ProfileScreen";
import renderer from "react-test-renderer";
import mockAxios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MockedNavigator = () => {
  const containerRef = React.useRef();
  return (
    <NavigationContainer ref={containerRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{ username: "KrastanD" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

it("Profile Screen renders correctly", () => {
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it("Profile Screen renders lack of data correctly", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({}));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

mockResponse = {
  login: "GreatHam",
  avatarUrl: "",
  bio: "",
  createdAt: "2017-09-17T22:28:50Z",
  email: "krastan.kdd@gmail.com",
  followers: {
    totalCount: 3,
  },
  following: {
    totalCount: 1,
  },
  name: "Krastan Dimitrov",
  websiteUrl: null,
  repositories: {
    totalCount: 4,
  },
};

it("Profile Screen renders mock data", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

mockResponse2 = {
  login: "KrastanD",
  avatarUrl: "",
  bio: "Random bio that goes on for a while and more and more and more.",
  createdAt: "",
  email: "email@email.email",
  followers: {},
  following: {},
  name: "",
  websiteUrl: "",
  repositories: {},
};

it("Profile Screen renders missing data fields", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse2));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

mockResponse2 = {
  login: "KrastanD",
  avatarUrl: "",
  bio: "Random bio that goes on for a while and more and more and more.",
  createdAt: "",
  websiteUrl: "",
  repositories: {},
};

it("Profile Screen renders lack of data fields", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse3));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});
