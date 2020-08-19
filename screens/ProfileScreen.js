import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import getProfileJson from "../server/ProfileAxios";
import Profile from "../model/Profile";

function ProfileScreen({ navigation, route }) {
  const [profile, setProfile] = useState(new Profile("{}"));

  useEffect(() => {
    getProfileJson(route.params.username)
      .then((resp) => {
        setProfile(new Profile(resp));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: profile.avatarUrl }}
          style={styles.welcomeImage}
        />
        <View style={styles.welcomeContainer}>
          <Text style={styles.getStartedText}>
            Name: {profile.name}
            {"\n"}
            Login: {profile.login}
            {"\n"}
            Bio: {profile.bio}
            {"\n"}
            Website: {profile.websiteUrl}
            {"\n"}
            Email: {profile.email}
            {"\n"}
            Profile Creation Date: {profile.createdAt}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.welcomeButton}
          onPress={() => navigation.navigate("Repos")}
        >
          <Text>{String(profile.repositories) + " public repos"}</Text>
        </TouchableOpacity>

        <View style={{ flex: 0.1 }} />

        <TouchableOpacity
          style={styles.welcomeButton}
          onPress={() => navigation.navigate("Followers")}
        >
          <Text>{String(profile.repositories) + " followers"}</Text>
        </TouchableOpacity>

        <View style={{ flex: 0.1 }} />

        <TouchableOpacity
          style={styles.welcomeButton}
          onPress={() => navigation.navigate("Following")}
        >
          <Text>{String(profile.following) + " following"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  welcomeContainer: {
    alignItems: "baseline",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 20,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  welcomeButton: {
    alignItems: "center",
    backgroundColor: "#dddddd",
    padding: 10,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: 10,
  },

  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "left",
    flexWrap: "wrap",
    flexShrink: 1,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
