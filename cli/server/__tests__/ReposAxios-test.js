import getReposJson from "../ReposAxios";

test("Repos json resolves", () => {
  getReposJson().resolves;
});

test("Repos json is not undefined", () => {
  getReposJson().then(resp => {
    expect(resp).not.toBeUndefined();
  });
});

test("Repos json has non-zero objects ", () => {
  getReposJson().then(resp => {
    expect(length(resp) >= 0).toBe(true);
  });
});
