const axios = require("axios");
require("dotenv").config();

var data = {
  access_token: process.env.GITHUB_API_KEY,
  expires_in: 3600,
  token_type: "Bearer",
};

const followersQuery = `
    query{
        viewer {
            followers(first: 10) {
                edges {
                    node {
                        avatarUrl
                        name
                        login
                        id
                    }
                }
            }
        }
    }`;

var getFollowersJson = () => {
  var promise = new Promise(function (resolve, reject) {
    let url = "https://api.github.com/graphql";
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: data.token_type + " " + data.access_token,
        Accept: "application/json",
      },
    };
    let passData = {
      query: followersQuery,
    };
    axios
      .post(url, passData, config)
      .then((resp) => {
        resolve(resp.data["data"]["viewer"]["followers"]["edges"]);
      })
      .catch(function (error) {
        reject(error);
      });
  });
  return promise;
};

export default getFollowersJson;
