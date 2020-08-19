import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import getFollowingJson from "../server/FollowingAxios";
import Followee from "../model/Followee";

function FollowingScreen({ navigation }) {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    getFollowingJson()
      .then((resp) => {
        var following = [];
        resp.forEach((element) => {
          following.push(new Followee(element));
        });
        setFollowing(following);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {following.map((followee) => (
        <OptionButton
          key={followee.id}
          avatarUrl={followee.avatarUrl}
          name={followee.name}
          login={followee.login}
          onPress={() => {
            navigation.navigate("User Profile", {
              username: followee.login,
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

export default FollowingScreen;

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
