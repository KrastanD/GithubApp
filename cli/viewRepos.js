import getReposJson from "./server/ReposAxios";
import Repo from "./model/Repo";

function viewRepos() {
  getReposJson().then((resp) => {
    var repos = [];
    resp.forEach((element) => {
      repos.push(new Repo(element));
    });
    repos.forEach((repo) => {
      console.log("Owner: " + repo.owner);
      console.log("Name: " + repo.name);
      console.log("Description: " + repo.description);
      console.log();
    });
  });
}

export default viewRepos;
