import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import getReposJson from "../server/ReposAxios";
import Repo from "../model/Repo";

function ReposScreen() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getReposJson()
      .then(resp => {
        var repos = [];
        resp.forEach(element => {
          repos.push(new Repo(element));
        });
        setRepos(repos);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {repos.map(repo => (
        <OptionButton
          key={repo.id}
          label={repo.name}
          onPress={() => WebBrowser.openBrowserAsync(repo.url)}
          owner={repo.owner}
          description={repo.description}
        />
      ))}
    </ScrollView>
  );
}

function OptionButton({ label, onPress, isLastOption, owner, description }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View>
        <View style={styles.optionTextContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.leftOptionText}>{label}</Text>
          </View>
          <View>
            <Text style={styles.rightOptionText}>{owner}</Text>
          </View>
        </View>
        <Text style={{ textAlign: "left", fontSize: 14 }}>{description}</Text>
      </View>
    </RectButton>
  );
}

export default ReposScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed"
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  leftOptionText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 1
  },
  rightOptionText: {
    fontSize: 15,
    marginTop: 1,
    textAlign: "right"
  },
  optionTextContainer: {
    flexDirection: "row",
    flex: 1
  }
});
