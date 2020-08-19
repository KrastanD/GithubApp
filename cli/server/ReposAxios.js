const axios = require("axios");
require("dotenv").config();

var data = {
  access_token: process.env.GITHUB_API_KEY,
  expires_in: 3600,
  token_type: "Bearer",
};

const reposQuery = `
    query{
        viewer {
          repositories(first: 10) {
            edges {
              node {
                name
                owner {
                  login
                }
                description
                url
                id
              }
            }
          }
        }
      }`;

var getReposJson = () => {
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
      query: reposQuery,
    };
    axios
      .post(url, passData, config)
      .then((resp) => {
        resolve(resp.data["data"]["viewer"]["repositories"]["edges"]);
      })
      .catch(function (error) {
        reject(error);
      });
  });
  return promise;
};

export default getReposJson;
