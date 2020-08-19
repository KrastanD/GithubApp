import React from "react";
import FollowersScreen from "../FollowersScreen";
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
        <Stack.Screen name="Followers" component={FollowersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

it("Followers Screen renders correctly", () => {
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it("Followers Screen renders lack of data correctly", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve("{}"));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

mockResponse = {
  avatarUrl: "random.url",
  name: "Big Ben",
  login: "biggusbennus",
  id: "1234",
};

it("Followers Screen renders mock data", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

mockResponse2 = {
  avatarUrl: "random.url",
  name: "",
  login: "biggusbennus",
  id: "",
};

it("Followers Screen renders missing data fields", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse2));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

mockResponse3 = {
  avatarUrl: "random.url",
  name: "",
};

it("Followers Screen renders lack of data fields", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse3));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});
