class Repo {
  constructor(json) {
    if (json == "[]") {
      this.name = "";
      this.owner = "";
      this.description = "";
      this.id = "";
      this.url = "";
    } else {
      this.name = json["node"]["name"];
      this.owner = json["node"]["owner"]["login"];
      this.description = json["node"]["description"];
      this.id = json["node"]["id"];
      this.url = json["node"]["url"];
    }
  }
}

export default Repo;
