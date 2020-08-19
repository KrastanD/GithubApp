class Follower {
  constructor(json) {
    if (json == "[]") {
      this.avatarUrl = "";
      this.name = "";
      this.login = "";
      this.id = "";
    } else {
      this.avatarUrl = json["node"]["avatarUrl"];
      this.name = json["node"]["name"];
      this.login = json["node"]["login"];
      this.id = json["node"]["id"];
    }
  }
}

export default Follower;
