import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "root",
        screens: {
          Profile: "Profile",
          Repos: "Repos",
          Followers: "Followers",
          Following: "Following"
        }
      }
    }
  });
}
