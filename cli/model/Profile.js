class Profile {
  constructor(json) {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    if (json == "{}") {
      this.login = "";
      this.avatarUrl = "https://reactnative.dev/img/header_logo.svg";
      this.bio = "";
      this.createdAt = "";
      this.email = "";
      this.followers = "";
      this.following = "";
      this.name = "";
      this.websiteUrl = "";
      this.repositories = "";
    } else {
      this.login = json["login"];
      this.avatarUrl = json["avatarUrl"];
      this.bio = json["bio"];
      var d = new Date(json["createdAt"]);
      this.createdAt = d.toLocaleDateString("en-US", options);
      this.email = json["email"];
      this.followers = json["followers"]["totalCount"];
      this.following = json["following"]["totalCount"];
      this.name = json["name"];
      this.websiteUrl = json["websiteUrl"];
      this.repositories = json["repositories"]["totalCount"];
    }
  }
}

export default Profile;
