import viewProfile from "./viewProfile";
import viewRepos from "./viewRepos";
import viewFollowers from "./viewFollowers";
import viewFollowing from "./viewFollowing";

require("dotenv").config();

const [, , ...args] = process.argv;

if (args[0] == "profile") {
  viewProfile(args[1]);
} else if (args[0] == "repositories") {
  viewRepos();
} else if (args[0] == "followers") {
  viewFollowers();
} else if (args[0] == "following") {
  viewFollowing();
} else if (args.length == 0) {
  console.log(
    `You must enter profile <username>, repositories, following or followers to view the information`
  );
}
