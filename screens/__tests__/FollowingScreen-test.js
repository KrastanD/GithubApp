import React from "react";
import FollowingScreen from "../FollowingScreen";
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
        <Stack.Screen name="Following" component={FollowingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

it("Following Screen renders correctly", () => {
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it("Following Screen renders lack of data correctly", () => {
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

it("Following Screen renders mock data", () => {
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

it("Following Screen renders missing data fields", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse2));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});

mockResponse3 = {
  avatarUrl: "random.url",
  name: "",
};

it("Following Screen renders lack of data fields", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse3));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree.toJSON()).toMatchSnapshot();
});
