import getProfileJson from "./server/ProfileAxios";
import Profile from "./model/Profile";

function viewProfile(username) {
  getProfileJson(username)
    .then((resp) => {
      let prof = new Profile(resp);
      console.log("Login: " + prof.login);
      console.log("Name: " + prof.name);
      console.log("Bio: " + prof.bio);
      console.log("Created On: " + prof.createdAt);
      console.log("Email: " + prof.email);
      console.log("Website Url: " + prof.websiteUrl);
      console.log("Num Followers: " + prof.followers);
      console.log("Num Following: " + prof.following);
      console.log("Num Repositories: " + prof.repositories);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default viewProfile;
