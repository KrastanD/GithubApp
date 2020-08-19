const axios = require("axios");
import getEnvVars from "../environment";

const { GITHUB_API_KEY } = getEnvVars();

var data = {
  access_token: GITHUB_API_KEY,
  expires_in: 3600,
  token_type: "Bearer",
};

profileQuery = `
  query myQuery($username: String!){
    user(login: $username) {
      login
      avatarUrl
      bio
      createdAt
      email
      followers {
        totalCount
      }
      following {
        totalCount
      }
      name
      websiteUrl
      repositories {
        totalCount
      }
    }
  }
  `;

getProfileJson = (username) => {
  let url = "https://api.github.com/graphql";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: data.token_type + " " + data.access_token,
      Accept: "application/json",
    },
  };
  let passData = {
    query: profileQuery,
    variables: {
      username: username,
    },
  };
  var promise = new Promise(function (resolve, reject) {
    axios
      .post(url, passData, config)
      .then((resp) => {
        resolve(resp.data["data"]["user"]);
      })
      .catch(function (error) {
        reject(error);
      });
  });
  return promise;
};

export default getProfileJson;
