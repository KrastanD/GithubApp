import getFollowingJson from "./server/FollowingAxios";
import Followee from "./model/Followee";

function viewFollowing() {
  getFollowingJson().then((resp) => {
    var following = [];
    resp.forEach((element) => {
      following.push(new Followee(element));
    });
    following.forEach((followee) => {
      console.log("Login: " + followee.login);
      console.log("Name: " + followee.name);
      console.log();
    });
  });
}

export default viewFollowing;
