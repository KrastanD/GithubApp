const axios = require("axios");
require("dotenv").config();

var data = {
  access_token: process.env.GITHUB_API_KEY,
  expires_in: 3600,
  token_type: "Bearer",
};

var profileQuery = `
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

var getProfileJson = (username) => {
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
