import viewRepos from "../viewRepos";
import mockConsole from "jest-mock-console";

it("viewRepos messages are collected", () => {
  const restoreConsole = mockConsole();
  viewRepos("KrastanD");
  expect(console.log).toHaveBeenCalled();
  restoreConsole();
});
