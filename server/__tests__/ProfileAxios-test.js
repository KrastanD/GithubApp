import getProfileJson from "../ProfileAxios";

test("Profile json resolves", () => {
  getProfileJson().resolves;
});

test("Profile json is not undefined", () => {
  getProfileJson().then(resp => {
    expect(resp).not.toBeUndefined();
  });
});

test("Profile json has right login", () => {
  getProfileJson().then(resp => {
    expect(resp["login"]).toBe("KrastanD");
  });
});

test("Profile json has non-negative follower count", () => {
  getProfileJson().then(resp => {
    expect(resp["followers"]["totalCount"] >= 0).toBe(true);
  });
});
