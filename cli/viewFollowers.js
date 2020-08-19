import getFollowersJson from "./server/FollowersAxios";
import Follower from "./model/Follower";

function viewFollowers() {
  getFollowersJson().then((resp) => {
    var followers = [];
    resp.forEach((element) => {
      followers.push(new Follower(element));
    });
    followers.forEach((follower) => {
      console.log("Login: " + follower.login);
      console.log("Name: " + follower.name);
      console.log();
    });
  });
}

export default viewFollowers;
