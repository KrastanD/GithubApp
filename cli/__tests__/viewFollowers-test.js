import viewFollowers from "../viewFollowers";
import mockConsole from "jest-mock-console";

it("viewFollowers messages are collected", () => {
  const restoreConsole = mockConsole();
  viewFollowers();
  expect(console.log).toHaveBeenCalled();
  restoreConsole();
});
