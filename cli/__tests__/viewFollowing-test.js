import viewFollowing from "../viewFollowing";
import mockConsole from "jest-mock-console";

it("viewFollowing messages are collected", () => {
  const restoreConsole = mockConsole();
  viewFollowing();
  expect(console.log).toHaveBeenCalled();
  restoreConsole();
});
