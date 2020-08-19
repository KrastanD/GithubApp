import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import getFollowersJson from "../server/FollowersAxios";
import Follower from "../model/Follower";

function FollowersScreen({ navigation }) {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFollowersJson()
      .then((resp) => {
        var followers = [];
        resp.forEach((element) => {
          followers.push(new Follower(element));
        });
        setFollowers(followers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentsContainer}
    >
      {followers.map((follower) => (
        <OptionButton
          key={follower.id}
          avatarUrl={follower.avatarUrl}
          name={follower.name}
          login={follower.login}
          onPress={() => {
            navigation.navigate("User Profile", {
              username: follower.login,
            });
          }}
        />
      ))}
    </ScrollView>
  );
}

function OptionButton({ avatarUrl, name, login, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: avatarUrl }} style={styles.welcomeImage} />
        <View style={styles.optionTextContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.loginText}>{"@" + login}</Text>
        </View>
      </View>
    </RectButton>
  );
}

export default FollowersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    height: "50",
    resizeMode: "contain",
  },
  option: {
    backgroundColor: "#fafafa",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  nameText: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 5,
  },
  loginText: {
    fontSize: 14,
  },
  optionTextContainer: {
    flex: 1,
  },
  avatar: {
    height: 30,
    resizeMode: "contain",
  },
  welcomeImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 10,
  },
});
