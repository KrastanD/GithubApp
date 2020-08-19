import viewProfile from "../viewProfile";
import mockConsole from "jest-mock-console";

it("viewProfile messages are collected", () => {
  const restoreConsole = mockConsole();
  viewProfile("KrastanD");
  expect(console.log).toHaveBeenCalled();
  restoreConsole();
});
