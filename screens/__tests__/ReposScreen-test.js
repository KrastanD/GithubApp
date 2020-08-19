import React from "react";
import ReposScreen from "../ReposScreen";
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
        <Stack.Screen name="Profile" component={ReposScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

it("Repos Screen renders correctly", () => {
  const tree = renderer.create(<MockedNavigator />);
  expect(tree).toMatchSnapshot();
});

it("Repos Screen renders lack of data correctly", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve([]));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree).toMatchSnapshot();
});

mockResponse = [
  {
    node: {
      name: "CIS2542",
      owner: {
        login: "KrastanD"
      },
      description: "Advanced C++ With Data Structure Application",
      url: "https://github.com/KrastanD/CIS2542",
      id: "MDEwOlJlcG9zaXRvcnkxMDc5MjMxOTY="
    }
  },
  {
    node: {
      name: "CSharpRepo",
      owner: {
        login: "KrastanD"
      },
      description:
        "All the C# solutions that I have made for my Intro to C# Class",
      url: "https://github.com/KrastanD/CSharpRepo",
      id: "MDEwOlJlcG9zaXRvcnkxMDg0MTg0MzI="
    }
  },
  {
    node: {
      name: "Offline-Disaster-Coaching",
      owner: {
        login: "KrastanD"
      },
      description:
        "An offline desktop application that coaches users through Disasters and Crises",
      url: "https://github.com/KrastanD/Offline-Disaster-Coaching",
      id: "MDEwOlJlcG9zaXRvcnkxMDk1MzUzNjQ="
    }
  },
  {
    node: {
      name: "Personal-Practice",
      owner: {
        login: "KrastanD"
      },
      description: "In this Repo, I solve random problems that I come up with",
      url: "https://github.com/KrastanD/Personal-Practice",
      id: "MDEwOlJlcG9zaXRvcnkxMTA5MTkyNTg="
    }
  }
];

it("Repos Screen renderes mock data", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree).toMatchSnapshot();
});

mockResponse2 = [
  {
    node: {
      name: "CIS2542",
      owner: {
        login: "KrastanD"
      },
      description: "Advanced C++ With Data Structure Application",
      url: "https://github.com/KrastanD/CIS2542",
      id: "MDEwOlJlcG9zaXRvcnkxMDc5MjMxOTY="
    }
  },
  {
    node: {
      name: "CSharpRepo",
      owner: {
        login: "KrastanD"
      },
      description:
        "All the C# solutions that I have made for my Intro to C# Class",
      url: "https://github.com/KrastanD/CSharpRepo",
      id: "MDEwOlJlcG9zaXRvcnkxMDg0MTg0MzI="
    }
  },
  {
    node: {
      name: "Offline-Disaster-Coaching",
      owner: {
        login: "KrastanD"
      },
      description:
        "An offline desktop application that coaches users through Disasters and Crises",
      url: "https://github.com/KrastanD/Offline-Disaster-Coaching",
      id: "MDEwOlJlcG9zaXRvcnkxMDk1MzUzNjQ="
    }
  }
];

it("Repos Screen renderes different amount of repos", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse2));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree).toMatchSnapshot();
});

mockResponse3 = [
  {
    node: {
      name: "CIS2542",
      owner: {
        login: "KrastanD"
      },
      description: "Advanced C++ With Data Structure Application",
      url: "https://github.com/KrastanD/CIS2542",
      id: "MDEwOlJlcG9zaXRvcnkxMDc5MjMxOTY="
    }
  },
  {
    node: {
      name: "CSharpRepo",
      owner: {
        login: "KrastanD"
      },
      description:
        "All the C# solutions that I have made for my Intro to C# Class",
      url: "https://github.com/KrastanD/CSharpRepo",
      id: "MDEwOlJlcG9zaXRvcnkxMDg0MTg0MzI="
    }
  },
  {
    node: {
      name: "Offline-Disaster-Coaching",
      owner: {
        login: "KrastanD"
      },
      description:
        "An offline desktop application that coaches users through Disasters and Crises",
      url: "https://github.com/KrastanD/Offline-Disaster-Coaching",
      id: "MDEwOlJlcG9zaXRvcnkxMDk1MzUzNjQ="
    }
  },
  {
    node: {
      name: "Personal-Practice",
      owner: {
        login: "KrastanD"
      },
      description: "In this Repo, I solve random problems that I come up with",
      url: "https://github.com/KrastanD/Personal-Practice",
      id: "MDEwOlJlcG9zaXRvcnkxMTA5MTkyNTg="
    }
  }
];

it("Repos Screen renderes different amount of repos", () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse3));
  const tree = renderer.create(<MockedNavigator />);
  expect(tree).toMatchSnapshot();
});
