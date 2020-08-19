const axios = require("axios");
import getEnvVars from "../environment";

const { GITHUB_API_KEY } = getEnvVars();

var data = {
  access_token: GITHUB_API_KEY,
  expires_in: 3600,
  token_type: "Bearer"
};

const followingQuery = `
    query{
        viewer {
            following(first: 10) {
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

getFollowingJson = () => {
  var promise = new Promise(function(resolve, reject) {
    let url = "https://api.github.com/graphql";
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: data.token_type + " " + data.access_token,
        Accept: "application/json"
      }
    };
    let passData = {
      query: followingQuery
    };
    axios
      .post(url, passData, config)
      .then(resp => {
        resolve(resp.data["data"]["viewer"]["following"]["edges"]);
      })
      .catch(function(error) {
        reject(error);
      });
  });
  return promise;
};

export default getFollowingJson;
